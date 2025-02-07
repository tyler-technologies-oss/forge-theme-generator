<script>
  import chroma, { contrast } from 'chroma-js';
  import { theme } from '$lib/theme.svelte';
  import { untrack } from 'svelte';
  let { colorType } = $props();

  $effect(() => {
    // $inspect(theme[colorType].containerColors);
    untrack(() => {
      theme[colorType].setColors(theme[colorType].color);
    });
  });

  const onColorChange = (color) => {
    theme[colorType].setColors(`${color}`);
  };
</script>

<forge-stack gap="8">
  <forge-text-field label-position="block-start">
    <label for={`${colorType}-color-input`}>{colorType} Color</label>
    <input
      type="text"
      id={`${colorType}-color-input`}
      bind:value={theme[colorType].color}
      oninput={(e) => {
        onColorChange(e.target.value);
      }}
    />

    <forge-icon-button aria-label="Open color picker" slot="end" id={`${colorType}-color-selector`}>
      <forge-icon name="format_color_fill" external></forge-icon>
    </forge-icon-button>
  </forge-text-field>
  <forge-popover
    anchor={`${colorType}-color-selector`}
    placement="bottom"
    position-strategy="fixed"
  >
    <forge-color-picker
      onforge-color-picker-change={(e) => {
        onColorChange(`#${e.detail.hex}`);
      }}
    ></forge-color-picker>
  </forge-popover>
</forge-stack>

<style>
  label {
    text-transform: capitalize;
  }
</style>
