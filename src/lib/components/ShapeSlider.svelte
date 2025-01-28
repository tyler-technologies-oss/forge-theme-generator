<script>
	let slider;
	const CSS_PROP = '--forge-shape';
	const shapeSizes = [
		{
			label: 'none',
			size: 0
		},
		{
			label: 'small',
			size: 8
		},
		{
			label: 'medium',
			size: 16
		},
		{
			label: 'large',
			size: 24
		}
	];

	const onSliderChange = (event) => {
		const value = event.detail.value;

		const html = document.querySelector('html');
		html.style.setProperty(`${CSS_PROP}-round`, `${value}px`);
		html.style.setProperty(`${CSS_PROP}-full`, `${value}px`);

		shapeSizes.forEach((shape) => {
			html.style.setProperty(`${CSS_PROP}-${shape.label}`, `${value}px`);
		});
	};
</script>

<forge-stack gap="0">
	<span class="forge-typography--label2">Shape</span>
	<forge-slider
		bind:this={slider}
		data-aria-label="Value"
		min="0"
		max="48"
		value="8"
		step="4"
		onforge-slider-input={onSliderChange}
	></forge-slider>
</forge-stack>
