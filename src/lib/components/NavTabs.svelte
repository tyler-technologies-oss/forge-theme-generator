<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';

  let tabBar;
  let currentUrl = $state({ value: '' });

  let pages = [
    { url: '/', title: 'Home' },
    { url: '/palette/', title: 'Color Palette' }
  ];

  $effect(() => {
    currentUrl.value = window.location.pathname;
    tabBar.activeTab = pages.findIndex((page) => page.url.includes(currentUrl.value));
  });

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
