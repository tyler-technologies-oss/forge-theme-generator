<script>
  import chroma from 'chroma-js';
  import { theme } from '$lib/theme.svelte';
  let { colorType } = $props();
  let root = $state({});
  let firstLoad = false;
  let luminance;

  const setOnColorBasedOnLuminance = (luminance) => {
    if (luminance <= 0.25) {
      return 'white';
    } else {
      return 'black';
    }
  };

  $effect(() => {
    root = document.documentElement;
    if (!firstLoad) {
      setColors(theme[`${colorType}Color`]);
      firstLoad = true;
    }
  });

  const setColors = (newColor) => {
    let isValidColor = chroma.valid(newColor);
    if (!isValidColor) {
      return;
    }
    luminance = chroma(newColor).luminance();
    theme[`${colorType}Color`] = newColor;

    // BRAND doesn't use any additional container colors
    if (colorType !== 'brand') {
      theme[`${colorType}ContainerColors`] = chroma
        .scale([theme[`${colorType}Color`], theme[`${colorType}ColorLightest`]])
        .mode('lab')
        .colors(4);

      theme[`on${colorType}ContainerColors`] = chroma
        .scale([
          theme[`${colorType}ContainerColors`].at(-1),
          theme[`${colorType}ContainerColors`].at(0)
        ])
        .mode('lab')
        .colors(4);

      theme[`${colorType}ColorLevels`].forEach((level) => {
        root.style.setProperty(`${level.level}`, level.color);
      });

      theme[`on${colorType}ColorLevels`].forEach((level) => {
        root.style.setProperty(`${level.level}`, level.color);
      });
    }

    theme[`on${colorType}Color`] = setOnColorBasedOnLuminance(luminance);
    root.style.setProperty(`--forge-theme-on-${colorType}`, theme[`on${colorType}Color`]);
    root.style.setProperty(`--forge-theme-${colorType}`, newColor);
  };

  const onColorChange = (color) => {
    setColors(`${color}`);
  };
</script>

<forge-stack gap="8">
  <forge-text-field label-position="block-start">
    <label for={colorType}>{colorType} Color</label>
    <input
      type="text"
      id={colorType}
      bind:value={theme[`${colorType}Color`]}
      oninput={(e) => {
        onColorChange(e.target.value);
      }}
    />

    <forge-icon-button
      aria-label="Default icon button"
      slot="end"
      id={`${colorType}-color-selector`}
    >
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
