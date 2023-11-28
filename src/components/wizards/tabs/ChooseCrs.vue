<template>
	<div class="step choose-crs">
		<p>Please select the coordinate reference system (CRS) you want to download data in.</p>
		<SelectBox type="crs" :options="options" :value="value" @input="setCrs" />
	</div>
</template>

<script>
import SelectBox from '../../datatypes/SelectBox.vue';

export default {
	name: 'ChooseCrs',
	components: {
		SelectBox
	},
	props: {
		value: {
			type: String,
			default: null
		},
		options: {
			type: Array,
			default: null
		}
	},
	methods: {
		setCrs(crs) {
			this.$emit('input', crs);
		}
	}
}
</script>