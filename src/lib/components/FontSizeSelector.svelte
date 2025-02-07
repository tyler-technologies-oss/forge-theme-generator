<script>
  import { appState } from '$lib/appState.svelte';

  const increaseFontSize = () => {
    if (appState.fontSizeSelected === 40) {
      return;
    }
    appState.fontSizeSelected = appState.fontSizeSelected + 1;
  };

  const decreaseFontSize = () => {
    if (appState.fontSizeSelected === 16) {
      return;
    }
    appState.fontSizeSelected = appState.fontSizeSelected - 1;
  };
</script>

{appState.fontSizeSelected}
<forge-stack inline gap="0" alignment="center">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <forge-icon-button
    aria-label="Decrease preview font size"
    dense
    onclick={decreaseFontSize}
    disabled={appState.fontSizeSelected === 16}
  >
    <forge-icon name="format_font_size_decrease" external external-type="extended"></forge-icon>
  </forge-icon-button>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <forge-icon-button
    aria-label="Increase preview font size"
    onclick={increaseFontSize}
    disabled={appState.fontSizeSelected === 40}
  >
    <forge-icon name="format_font_size_increase" external external-type="extended"></forge-icon>
  </forge-icon-button>
</forge-stack>
