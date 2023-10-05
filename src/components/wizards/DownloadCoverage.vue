<template>
	<div class="wizard-tab-content">
		<WizardTab :pos="0" :parent="parent" title="Data Source" :beforeChange="() => collection !== null">
			<ChooseCollection :value="collection" :filter="filterCollections" @input="submitCollection" ogcapi />
		</WizardTab>
		<WizardTab :pos="1" :parent="parent" title="Location" :beforeChange="() => spatial_extent !== null">
			<ChooseBoundingBox v-model="spatial_extent" :max="max_spatial_extent" />
		</WizardTab>
		<WizardTab :pos="2" :parent="parent" title="Temporal Coverage" :beforeChange="() => temporal_extent !== null">
			<ChooseTime v-model="temporal_extent" />
		</WizardTab>
		<WizardTab :pos="3" :parent="parent" title="File Format" :beforeChange="() => format !== null">
			<ChooseFormat v-model="format" :options="fileFormats" />
		</WizardTab>
	</div>
</template>

<script>
import ChooseBoundingBox from './tabs/ChooseBoundingBox.vue';
import ChooseCollection from './tabs/ChooseCollection.vue';
import ChooseFormat from './tabs/ChooseFormat.vue';
import ChooseTime from './tabs/ChooseTime.vue';
import WizardMixin from './WizardMixin';
import Utils from '../../utils';
import EventBusMixin from '../EventBusMixin';

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
		ChooseFormat,
		ChooseTime
	},
	data() {
		return {
			collection: null,
			format: null,
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
	},
	computed: {
		...Utils.mapState(['collections']),
		...Utils.mapGetters(['processes', 'collectionDefaults']),
		collectionData() {
			if (!this.collection || !Array.isArray(this.collections)) {
				return [];
			}
			return this.collections.find(c => c.id === this.collection);
		},
		coverageLinks() {
			if (!Utils.isObject(this.collectionData) || !Array.isArray(this.collectionData.links)) {
				return [];
			}
			return this.collectionData.links
				.filter(link => Utils.isObject(link) && link.rel === 'http://www.opengis.net/def/rel/ogc/1.0/coverage');
		},
		fileFormats() {
			return this.coverageLinks.map(link => link.type || DEFAULT_TYPE);
		}
	},
	methods: {
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
			
			let href = url.toString();
			console.log(href);
			let title = `Coverage: ${this.collection}`;
			let stac = {
				assets: {
					coverage: {
						href,
						type: this.format,
						title
					}
				}
			};

			this.broadcast('viewJobResults', stac, null, title);
		}
	}
}
</script>
