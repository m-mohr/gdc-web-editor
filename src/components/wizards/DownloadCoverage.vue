<template>
	<div class="wizard-tab-content">
		<WizardTab :pos="0" :parent="parent" title="Data Source" :beforeChange="loadCollection">
			<ChooseCollection :value="collection" :filter="filterCollections" @input="submitCollection" ogcapi />
		</WizardTab>
		<WizardTab :pos="1" :parent="parent" title="Location" :beforeChange="() => !supportsSubsetting || spatial_extent !== null">
			<ChooseBoundingBox v-if="supportsSubsetting" v-model="spatial_extent" :max="max_spatial_extent" />
			<p v-else>Bounding box selection not supported by the server. Go ahead please.</p>
		</WizardTab>
		<WizardTab :pos="2" :parent="parent" title="Temporal Coverage" :beforeChange="() => !supportsSubsetting || temporal_extent !== null">
			<ChooseTime v-if="supportsSubsetting" v-model="temporal_extent" />
			<p v-else>Date and time selection not supported by the server. Go ahead please.</p>
		</WizardTab>
		<WizardTab :pos="3" :parent="parent" title="CRS">
			<ChooseCrs v-if="supportsCrs" v-model="crs" :options="crsList" />
			<p v-else>CRS selection not supported by the server. Go ahead please.</p>
		</WizardTab>
		<WizardTab :pos="4" :parent="parent" title="Scaling">
			<ChooseScale v-if="supportsScaling" v-model="scale" :data="collectionData" />
			<p v-else>Scaling not supported by the server. Go ahead please.</p>
		</WizardTab>
		<!-- todo: field selection -->
		<WizardTab :pos="5" :parent="parent" title="File Format" :beforeChange="() => format !== null">
			<ChooseFormat v-model="format" :options="fileFormats" :scale="false" />
		</WizardTab>
	</div>
</template>

<script>
import ChooseBoundingBox from './tabs/ChooseBoundingBox.vue';
import ChooseCollection from './tabs/ChooseCollection.vue';
import ChooseCrs from './tabs/ChooseCrs.vue';
import ChooseFormat from './tabs/ChooseFormat.vue';
import ChooseScale from './tabs/ChooseScale.vue';
import ChooseTime from './tabs/ChooseTime.vue';
import WizardMixin from './WizardMixin';
import Utils from '../../utils';
import EventBusMixin from '../EventBusMixin';
import { Client } from '@openeo/js-client';
import { cancellableRequest } from '../cancellableRequest';

const DEFAULT_TYPE = "default";

export default {
	name: "DownloadCoverage",
	mixins: [
		EventBusMixin,
		WizardMixin
	],
	components: {
		ChooseBoundingBox,
		ChooseCollection,
		ChooseCrs,
		ChooseFormat,
		ChooseScale,
		ChooseTime
	},
	data() {
		return {
			collection: null,
			collectionData: {},
			crs: null,
			format: null,
			scale: null,
			spatial_extent: null,
			max_spatial_extent: null,
			temporal_extent: null
		};
	},
	props: {
		cid: {
			type: String,
			default: null
		}
	},
	created() {
		this.collection = this.cid;
		
		if (this.collection && Array.isArray(this.collections)) {
			this.collectionData = this.collections.find(c => Utils.isObject(c) && c.id === this.collection) || {};
		}
	},
	computed: {
		...Utils.mapState(['collections', 'connection']),
		...Utils.mapGetters(['processes', 'collectionDefaults', 'supportsOgc']),
		supportsSubsetting() {
			return this.supportsOgc('http://www.opengis.net/spec/ogcapi-coverages-1/1.0/conf/subsetting');
		},
		supportsProperties() {
			return this.supportsOgc('http://www.opengis.net/spec/ogcapi-coverages-1/1.0/conf/fieldselection');
		},
		supportsScaling() {
			return this.supportsOgc('http://www.opengis.net/spec/ogcapi-coverages-1/1.0/conf/scaling');
		},
		supportsCrs() {
			return this.crsList.length > 1 && this.supportsOgc('http://www.opengis.net/spec/ogcapi-coverages-1/1.0/conf/crs');
		},
		coverageLinks() {
			if (!Array.isArray(this.collectionData.links)) {
				return [];
			}
			return this.collectionData.links
				.filter(link => Utils.isObject(link) && link.rel === 'http://www.opengis.net/def/rel/ogc/1.0/coverage');
		},
		fileFormats() {
			return this.coverageLinks.map(link => link.type || DEFAULT_TYPE);
		},
		crsList() {
			if (Array.isArray(this.collectionData.crs)) {
				return this.collectionData.crs;
			}
			return [];
		}
	},
	methods: {
		...Utils.mapActions(['describeCollection']),
		async loadCollection() {
			if (this.collection === null) {
				throw new Error("Please select a collection");
			}

			try {
				this.collectionData = await this.describeCollection(this.collection);
				return true;
			} catch(error) {
				console.error(error);
				throw new Error("Can't load collection metadata, please try another collection.");
			}
		},
		filterCollections(collection) {
			 return Utils.isCoverage(collection);
		},
		submitCollection(id) {
			if (this.collection !== id || this.temporal_extent === null) {
				let defaults = this.collectionDefaults(id);
				if (this.collection !== id && defaults.spatial_extent) {
					this.max_spatial_extent = defaults.spatial_extent;
				}
				if ((this.collection !== id || this.temporal_extent === null) && defaults.temporal_extent) {
					this.temporal_extent = defaults.temporal_extent;
				}
			}
			this.collection = id;
			this.parent.nextTab();
		},
		async finish() {
			let filterFn = this.format === DEFAULT_TYPE ? link => !link.type : link => link.type === this.format;
			let link = this.coverageLinks.find(filterFn);
			if (!link) {
				throw new Error("Can't find link to coverage");
			}

			let baseUrl;
			let selfLink = Utils.getLink(this.collectionData, 'self');
			if (selfLink) {
				baseUrl = selfLink.href;
			}

			let url = new URL(link.href, baseUrl);

			let bbox = [
				this.spatial_extent.west,
				this.spatial_extent.south,
				this.spatial_extent.east,
				this.spatial_extent.north
			];
			url.searchParams.set('bbox', bbox.join(','));

			if (Array.isArray(this.temporal_extent)) {
				let datetime = this.temporal_extent
					.map(dt => {
						if (typeof dt !== 'string' || dt.length < 10) {
							return '..';
						}
						if (dt.length === 10) {
							return dt + "T00:00:00Z";
						}
						return dt;
					})
					.join('/');
				if (datetime && datetime !== '../..') {
					url.searchParams.set('datetime', datetime);
				}
			}

			if (this.crs !== null) {
				url.searchParams.set('crs', this.crs);
			}
	
			if (this.scale !== null) {
				url.searchParams.set('scale-factor', this.scale);
			}

			if (link.type) {
				url.searchParams.set('f', link.type);
			}

			// Not supported: bbox-crs, subset-crs, subset (use bbox/datetime) instead, properties, scale-axes, scale-size

			const href = url.toString();

			const callback = async (abortController) => {
				const response = await this.connection._get(href, {}, Client.Environment.getResponseType(), abortController);
				let result = {
					data: response.data,
					type: response.headers['content-type'] || null
				};
				this.broadcast('viewSyncResult', result, `Coverage: ${this.collection}`);
			};
			await cancellableRequest(this, callback, 'Coverage request');
		}
	}
}
</script>
