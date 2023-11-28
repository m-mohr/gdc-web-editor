<template>
	<div class="step choose-crs">
		<p>You can optionally select a scale factor for the data.</p>
		<input type="number" :min="1" :step="0.1" :value="value" @input="setScale" />
		<p><code>1</code> is the original resolution.<br />
			<code>2</code> would be half of the original resolution, etc. The higher the given value, the lower the resolution.<br />
			Leave the field empty to use the default behavior of the server.
		</p>
	</div>
</template>

<script>
export default {
	name: 'ChooseScale',
	props: {
		value: {
			type: Number,
			default: null
		},
		data: {
			type: Object,
			default: () => ({})
		}
	},
	methods: {
		setScale(event) {
			if (typeof event.target.valueAsNumber === 'number' && !Number.isNaN(event.target.valueAsNumber)) {
				this.$emit('input', event.target.valueAsNumber);
			}
			else {
				this.$emit('input', null);
			}
		}
	}
}
</script>