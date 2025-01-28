<script lang="ts">
	let { children } = $props();
</script>

<forge-app-bar title-text="Tyler Forge Theming" theme="white">
	<forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
</forge-app-bar>
{@render children()}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		height: 100dvh;
	}
</style>
