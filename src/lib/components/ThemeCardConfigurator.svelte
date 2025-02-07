<script>
  import { theme } from '$lib/theme.svelte';
  import ColorPicker from './ColorPicker.svelte';
  import CopyToClipboardButton from './CopyToClipboardButton.svelte';
  import DensitySlider from './DensitySlider.svelte';
  import DesiredContrastRatio from './DesiredContrastRatio.svelte';
  import ShapeSlider from './ShapeSlider.svelte';

  let dialog;
</script>

<forge-card class="container-card">
  <div>
    <forge-stack gap="32">
      <!-- <ColorPicker colorType="brand" /> -->
      <ColorPicker colorType="primary" />
      <ColorPicker colorType="secondary" />
      <ColorPicker colorType="tertiary" />
      <DesiredContrastRatio />
      <ShapeSlider />
      <DensitySlider />
      <forge-button variant="raised" id="open-css-dialog">
        <forge-icon name="code" external></forge-icon>
        Get CSS
      </forge-button>
    </forge-stack>
  </div>
</forge-card>

<forge-dialog
  bind:this={dialog}
  preset="right-sheet"
  trigger="open-css-dialog"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <div class="dialog">
    <forge-toolbar>
      <h1 slot="start" class="forge-typography--heading3">CSS Custom Properties</h1>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <forge-icon-button
        slot="end"
        onclick={() => {
          dialog.open = false;
        }}
      >
        <forge-icon name="close" external></forge-icon>
      </forge-icon-button>
    </forge-toolbar>

    <div class="dialog-inner">
      <forge-stack gap="16">
        <forge-inline-message theme="info-secondary">
          <forge-icon slot="icon" name="info" external></forge-icon>
          <p>
            Load these CSS Custom Properties on the <code
              style="background-color: #333; color: white; padding: 2px;">:root</code
            > pseudo-class
          </p>
        </forge-inline-message>
        <forge-card class="dialog-card">
          <div id="textToCopy">
            <div class="forge-typography--label3 spacer">
              --forge-theme-brand: {theme.brandColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-on-brand: {theme.onbrandColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-primary: {theme.primaryColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-on-primary: {theme.onprimaryColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-secondary: {theme.secondaryColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-on-secondary: {theme.onsecondaryColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-tertiary: {theme.tertiaryColor};
            </div>
            <div class="forge-typography--label3 spacer">
              --forge-theme-on-tertiary: {theme.ontertiaryColor};
            </div>
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
            {#each theme.secondaryColorLevels as level}
              <div class="forge-typography--label3 spacer">
                {level.level}: {level.color};
              </div>
            {/each}
            {#each theme.onsecondaryColorLevels as level}
              <div class="forge-typography--label3 spacer">
                {level.level}: {level.color};
              </div>
            {/each}
            {#each theme.tertiaryColorLevels as level}
              <div class="forge-typography--label3 spacer">
                {level.level}: {level.color};
              </div>
            {/each}
            {#each theme.ontertiaryColorLevels as level}
              <div class="forge-typography--label3 spacer">
                {level.level}: {level.color};
              </div>
            {/each}
          </div>

          <div class="button-container">
            <CopyToClipboardButton />
          </div>
        </forge-card>
      </forge-stack>
    </div>
  </div>
</forge-dialog>

<style>
  .container-card {
    height: fit-content;
    margin-inline: 24px;
    --forge-card-elevation: var(--forge-elevation-15);
    --forge-card-shape: 8px;
  }

  .dialog-inner {
    display: flex;
    flex-direction: column;
    width: 768px;
    padding: var(--forge-spacing-medium);
  }

  .spacer {
    padding-inline-start: var(--forge-spacing-medium);
  }

  .dialog-card {
    position: relative;
  }

  .button-container {
    position: absolute;
    top: var(--forge-spacing-medium);
    right: var(--forge-spacing-medium);
  }
</style>
