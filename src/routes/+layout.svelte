<script lang="ts">
	let { children } = $props();
	import '../app.scss';
</script>

<forge-app-bar title-text="Tyler Forge Theming" theme="white">
	<forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
</forge-app-bar>
{@render children()}

<style>
</style>
