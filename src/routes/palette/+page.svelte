<script>
  import ColorPreview from '$lib/components/ColorPreview.svelte';
  import FontSizeSelector from '$lib/components/FontSizeSelector.svelte';
  import { theme } from '$lib/theme.svelte';
</script>

<forge-stack gap="48">
  <div class="grid">
    <div class="span-full">
      <div class="typography-selector-container">
        <span>Primary</span>
        <FontSizeSelector />
      </div>
    </div>
    {#if theme.primary.colorLevels.length}
      <ColorPreview
        level="--forge-theme-primary"
        color={theme.primary.color}
        onLevel="--forge-theme-on-primary"
        onColor={theme.primary.onColor}
      />
      {#each theme.primary.colorLevels as level, index}
        <ColorPreview
          level={level.level}
          color={level.color}
          onLevel={theme.primary.onColorLevels[index].level}
          onColor={theme.primary.onColorLevels[index].color}
        />
      {/each}
    {/if}
  </div>

  <div class="grid">
    <span class="span-full">Secondary</span>
    {#if theme.secondary.colorLevels.length}
      <ColorPreview
        level="--forge-theme-secondary"
        color={theme.secondary.color}
        onLevel="--forge-theme-on-secondary"
        onColor={theme.secondary.onColor}
      />
      {#each theme.secondary.colorLevels as level, index}
        <ColorPreview
          level={level.level}
          color={level.color}
          onLevel={theme.secondary.onColorLevels[index].level}
          onColor={theme.secondary.onColorLevels[index].color}
        />
      {/each}
    {/if}
  </div>

  <div class="grid">
    <span class="span-full">Tertiary</span>
    {#if theme.tertiary.colorLevels.length}
      <ColorPreview
        level="--forge-theme-tertiary"
        color={theme.tertiary.color}
        onLevel="--forge-theme-on-tertiary"
        onColor={theme.tertiary.onColor}
      />
      {#each theme.tertiary.colorLevels as level, index}
        <ColorPreview
          level={level.level}
          color={level.color}
          onLevel={theme.tertiary.onColorLevels[index].level}
          onColor={theme.tertiary.onColorLevels[index].color}
        />
      {/each}
    {/if}
  </div>

  <div class="grid">
    <span class="span-full">Surface</span>
    {#if theme.surface.surfaceColorLevels.length}
      <ColorPreview
        level="--forge-theme-surface"
        color={theme.surface.surfaceColor}
        onLevel="--forge-theme-on-surface"
        onColor={theme.surface.onSurfaceColor}
      />
      {#each theme.surface.surfaceColorLevels as level, index}
        <ColorPreview
          level={level.level}
          color={level.color}
          onLevel={theme.surface.onSurfaceColorLevels[index].level}
          onColor={theme.surface.onSurfaceColorLevels[index].color}
        />
      {/each}
    {/if}
  </div>
</forge-stack>

<style>
  .typography-selector-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--forge-spacing-medium);
    height: fit-content;
    max-width: 1320px;
  }

  .span-full {
    grid-column: 1/-1;
  }
</style>
