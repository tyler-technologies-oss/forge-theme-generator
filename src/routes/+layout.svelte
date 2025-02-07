<script lang="ts">
  import { goto } from '$app/navigation';
  import ThemeCardConfigurator from '$lib/components/ThemeCardConfigurator.svelte';
  let { children } = $props();
  import '../app.scss';

  const onTabBarChange = (e) => {
    switch (e) {
      case 0:
        goto('/');
        break;
      case 1:
        goto('/palette');
        break;
    }
  };
</script>

<forge-scaffold>
  <div slot="header">
    <forge-app-bar
      title-text="Tyler Forge Theming"
      theme="white"
      onforge-tab-bar-change={(e) => {
        onTabBarChange(e.detail);
      }}
    >
      <forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
      <forge-tab-bar data-aria-label="Demo tabs" active-tab="0" slot="end">
        <forge-tab value="/">Demo App Preview</forge-tab>
        <forge-tab value="/palette">Palette</forge-tab>
      </forge-tab-bar>
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

  [aria-current='page'] {
  }
</style>
