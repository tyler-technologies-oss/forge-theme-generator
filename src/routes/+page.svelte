<script>
  import { setContext } from 'svelte';
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import chroma from 'chroma-js';
  import { theme } from '$lib/theme.svelte';
  import { json } from '@sveltejs/kit';
  import ThemeDemo from '$lib/components/ThemeDemo.svelte';
  import CopyToClipboardButton from '$lib/components/CopyToClipboardButton.svelte';
  import ShapeSlider from '$lib/components/ShapeSlider.svelte';
  import DensitySlider from '$lib/components/DensitySlider.svelte';
  import ColorContrastCheckbox from '$lib/components/ColorContrastCheckbox.svelte';
  import ThemeCardConfigurator from '$lib/components/ThemeCardConfigurator.svelte';
</script>

<forge-scaffold>
  <div slot="body">
    <ThemeCardConfigurator />
    <ThemeDemo />
    <!-- <div style="padding: 32px;">
      {#each theme.primaryColorLevels as level}
        <div class="forge-typography--label3 spacer">
          {level.level}: {level.color};
        </div>
      {/each}
      {#each theme.onprimaryColorLevels as level}
        <div class="forge-typography--label3 spacer">
          {level.level}: {level.color};
        </div>
      {/each}
    </div> -->
  </div>
</forge-scaffold>

<style>
  [slot='body'] {
    overflow: hidden;
    padding-block: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>
