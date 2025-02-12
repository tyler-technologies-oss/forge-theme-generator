<script>
  import ColorPreview from '$lib/components/ColorPreview.svelte';
  import FontSizeSelector from '$lib/components/FontSizeSelector.svelte';
  import { theme } from '$lib/theme.svelte';
</script>

{#snippet containerColorsByType(colorType)}
  <forge-card class="outer-card">
    <forge-toolbar>
      <div slot="start" class="title">{colorType}</div>
    </forge-toolbar>
    <div class="grid">
      {#if theme[colorType].colorLevels.length}
        <ColorPreview
          level="--forge-theme-{colorType}"
          color={theme[colorType].color}
          onLevel="--forge-theme-on-{colorType}"
          onColor={theme[colorType].onColor}
        />
        {#each theme[colorType].colorLevels as level, index}
          <ColorPreview
            level={level.level}
            color={level.color}
            onLevel={theme[colorType].onColorLevels[index].level}
            onColor={theme[colorType].onColorLevels[index].color}
          />
        {/each}
      {/if}
    </div>
  </forge-card>
{/snippet}

<div class="page-container">
  <forge-stack>
    <div class="font-size-selector">
      <FontSizeSelector />
    </div>
    {@render containerColorsByType('primary')}
    {@render containerColorsByType('secondary')}
    {@render containerColorsByType('tertiary')}
    {@render containerColorsByType('success')}
    {@render containerColorsByType('error')}
    {@render containerColorsByType('warning')}
    {@render containerColorsByType('info')}
  </forge-stack>
</div>

<style>
  .title {
    text-transform: capitalize;
  }
  .page-container {
    --max-width: 1600px;
    max-width: var(--max-width);
  }
  .outer-card {
    --forge-card-padding: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--forge-spacing-medium);
    height: fit-content;
    max-width: var(--max-width);
    padding: var(--forge-spacing-medium);
  }

  .font-size-selector {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
  }
</style>
