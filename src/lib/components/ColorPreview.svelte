<script>
  import { appState } from '$lib/appState.svelte';
  import chroma from 'chroma-js';
  let { level, color, onLevel, onColor } = $props();
  let contrastRatio = $state({ value: null });

  $effect(() => {
    if (color && onColor) {
      contrastRatio.value = chroma.contrast(color, onColor).toFixed(2);
    }
  });

  const stripOutPrefix = (s) => {
    return s.replace('--forge-theme-', '').replace(')', '');
  };
</script>

<forge-card style="--forge-card-padding: 0;">
  <forge-toolbar>
    <forge-stack slot="start" gap="0">
      <p class="forge-typography--label2">{stripOutPrefix(level)}</p>
    </forge-stack>
  </forge-toolbar>
  <div style="padding: var(--forge-spacing-medium);">
    <forge-stack inline alignment="center">
      <div class="color-square" style={`background-color: var(${level}); color: var(${onLevel})`}>
        <span class="fo" style={`font-size: ${appState.fontSizeSelected}px`}>Fo</span>
      </div>
      <forge-stack inline gap="8" alignment="center">
        <span class="forge-typography--label1">Contrast ratio: {contrastRatio.value}</span>
        {#if contrastRatio.value < 4.5}
          <forge-icon name="warning" external style="color: var(--forge-theme-error);"></forge-icon>
        {:else}
          <forge-icon name="check_circle" external style="color: var(--forge-theme-success);"
          ></forge-icon>
        {/if}
      </forge-stack>
    </forge-stack>
  </div>
</forge-card>

<style>
  p {
    padding: 0;
    margin: 0;
  }

  .color-square {
    position: relative;
    height: 64px;
    width: 64px;
    border-radius: var(--forge-shape-factor);
  }

  .fo {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-inline-end: 0.5rem;
    padding-block-end: 0.5rem;
  }
</style>
