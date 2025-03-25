<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  let tabBar;
  let currentUrl = $state({ value: '' });

  let pages = [
    { url: `${base}`, title: 'Home' },
    { url: `${base}/palette/`, title: 'Color Palette' }
  ];

  $effect(() => {
    currentUrl.value = window.location.pathname;
    if (currentUrl.value === `${base}/`) {
      tabBar.activeTab = 0;
    } else {
      tabBar.activeTab = pages.findIndex((page) => page.url.includes(currentUrl.value));
    }
  });

  const setActiveTab = (url) => {
    tabBar.activeTab = pages.findIndex((page) => page.url.includes(url));
  };

  const onTabBarChange = (e) => {
    goto(pages[e].url);
  };
</script>

<forge-tab-bar
  bind:this={tabBar}
  data-aria-label="Demo tabs"
  onforge-tab-bar-change={(e) => {
    onTabBarChange(e.detail.index);
  }}
>
  {#each pages as page}
    <forge-tab value={page.url}>{page.title}</forge-tab>
  {/each}
</forge-tab-bar>
