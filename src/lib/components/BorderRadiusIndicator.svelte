<script>
	export let shape;
</script>

<div class={`box ${shape.label}`}></div>

<style>
	.box {
		--radius-color: var(--forge-theme-text-high);
		--radius-size: 4px;
		height: 16px;
		width: 16px;
		background-color: var(--forge-theme-surface);
		border-left: 2px solid var(--radius-color);
		border-top: 2px solid var(--radius-color);
		border-top-left-radius: var(--radius-size);
	}

	.none {
		--radius-size: 0;
	}
	.small {
		--radius-size: 4px;
	}
	.medium {
		--radius-size: 8px;
	}
	.large {
		--radius-size: 16px;
	}
	.full {
		--radius-size: 9999px;
	}
</style>
