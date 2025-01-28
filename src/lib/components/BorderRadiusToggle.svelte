<script>
	import BorderRadiusIndicator from './BorderRadiusIndicator.svelte';
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

	const onRadiusChange = (newShape) => {
		const html = document.querySelector('html');
		html.style.setProperty(`${CSS_PROP}-round`, `${newShape}px`);
		html.style.setProperty(`${CSS_PROP}-full`, `${newShape}px`);

		shapeSizes.forEach((shape) => {
			html.style.setProperty(`${CSS_PROP}-${shape.label}`, `${newShape}px`);
		});
	};
</script>

<forge-stack gap="0">
	<span class="forge-typography--label2">Shape</span>
	<forge-button-toggle-group
		value="8"
		aria-label="Choose communication type"
		class="radius-toggle"
		on:forge-button-toggle-group-change={(e) => {
			onRadiusChange(e.detail);
		}}
	>
		{#each shapeSizes as shape}
			<forge-button-toggle value={shape.size}>
				<forge-stack gap="4" alignment="center">
					<BorderRadiusIndicator {shape} />
					<div class="forge-typography--button uppercase">{shape.label}</div>
				</forge-stack>
			</forge-button-toggle>
		{/each}
	</forge-button-toggle-group>
</forge-stack>

<style lang="scss">
	.radius-toggle {
		--forge-button-toggle-group-height: 56px;

		&::part(root) {
			justify-content: space-around;
		}
	}

	.uppercase {
		text-transform: capitalize;
	}
</style>
