<script>
  import { theme } from '$lib/theme.svelte';

  const onInput = (e) => {
    theme.primary.setColors(theme.primary.color);
    theme.secondary.setColors(theme.secondary.color);
    theme.tertiary.setColors(theme.tertiary.color);
  };
</script>

<forge-text-field
  label-position="block-start"
  oninput={(e) => {
    onInput(e);
  }}
>
  <!-- svelte-ignore a11y_label_has_associated_control -->
  <label>Desired contrast ratio</label>
  <input type="number" bind:value={theme.desiredContrastRatio} step=".5" />
</forge-text-field>
