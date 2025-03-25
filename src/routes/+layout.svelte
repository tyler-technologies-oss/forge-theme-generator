<script lang="ts">
  import NavTabs from '$lib/components/NavTabs.svelte';
  import ThemeCardConfigurator from '$lib/components/ThemeCardConfigurator.svelte';
  let { children } = $props();
  import '../app.scss';
</script>

<forge-scaffold>
  <div slot="header">
    <forge-app-bar title-text="Tyler Forge Theming" theme="white" href="/">
      <forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
      <div slot="end"><NavTabs /></div>
    </forge-app-bar>
  </div>
  <div slot="body-left">
    <ThemeCardConfigurator />
  </div>
  <div slot="body" id="demo-container">
    {@render children()}
  </div>
</forge-scaffold>

<style>
  [slot='body-left'] {
    padding-block: 24px;
  }

  #demo-container {
    padding: var(--forge-spacing-xlarge);
  }

  [slot='end'] {
    height: 100%;
    display: flex;
    align-items: end;
  }
</style>
