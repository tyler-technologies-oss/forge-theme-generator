<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let tabBar;
  let currentUrl = $state({ value: '' });

  $effect(() => {
    currentUrl.value = window.location.pathname;
    if (currentUrl.value.includes('palette')) {
      tabBar.activeTab = 1;
    } else {
      tabBar.activeTab = 0;
    }
  });

  const onTabBarChange = (e) => {
    switch (e.index) {
      case 0:
        goto('/');
        break;
      case 1:
        goto('/palette');
        break;
    }
  };
</script>

<forge-tab-bar
  bind:this={tabBar}
  data-aria-label="Demo tabs"
  onforge-tab-bar-change={(e) => {
    onTabBarChange(e.detail);
  }}
>
  <forge-tab value="/">Demo App Preview</forge-tab>
  <forge-tab value="/palette">Palette</forge-tab>
</forge-tab-bar>
