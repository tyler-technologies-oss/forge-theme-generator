<script>
  import chroma, { contrast } from 'chroma-js';
  import { theme } from '$lib/theme.svelte';
  import { untrack } from 'svelte';
  let { colorType } = $props();
  let demoContainer = $state({});

  const getAccessibleTextColor = (containerColor, containerColorIndex) => {
    const contrastRatio = 4.5;
    const stepSize = 0.025; // Adjust this for stronger or weaker brightening/darkening
    const maxAdjustments = 20000; // Prevent infinite loops by limiting adjustments

    let adjustedColor = chroma(containerColor);
    let contrast = chroma.contrast(containerColor, adjustedColor.hex());
    let iterations = 0;

    if (chroma(containerColor).luminance() > 0.3) {
      // Background is light, so darken the text color
      while (contrast < contrastRatio && iterations < maxAdjustments) {
        adjustedColor = adjustedColor.darken(stepSize);
        contrast = chroma.contrast(containerColor, adjustedColor.hex());

        if (adjustedColor.hex() === '#000000') {
          break;
        }
        iterations++;
      }
    } else {
      // Background is dark, so brighten the text color
      while (contrast < contrastRatio && iterations < maxAdjustments) {
        adjustedColor = adjustedColor.brighten(stepSize);
        contrast = chroma.contrast(containerColor, adjustedColor.hex());

        if (adjustedColor.hex() === '#ffffff') {
          // This is a workaround for the primary-container-minimum default forge color not passing. This bumps it up a tiny bit to pass
          if (contrast < contrastRatio && containerColorIndex) {
            theme[colorType].containerColors[containerColorIndex] = chroma(
              theme[colorType].containerColors[containerColorIndex]
            ).darken(0.1);
          }
          break;
        }

        iterations++;
      }
    }
    return adjustedColor.hex();
  };

  $effect(() => {
    // $inspect(theme[colorType].containerColors);
    untrack(() => {
      demoContainer = document.querySelector('#demo-container');
      setColors(theme[colorType].color);
    });
  });

  const setColors = (newColor) => {
    let isValidColor = chroma.valid(newColor);
    if (!isValidColor) {
      return;
    }

    theme[colorType].color = newColor;
    theme[colorType].onColor = getAccessibleTextColor(newColor);
    theme[colorType].colorLightest = chroma(newColor).tint(0.95);

    theme[colorType].containerColors = chroma
      .scale([chroma(newColor).brighten(2), theme[colorType].colorLightest])
      .mode('hsl')
      .colors(theme.containerColorLevels.length);

    theme[colorType].onContainerColors = theme[colorType].containerColors.map((cc, index) =>
      getAccessibleTextColor(cc, index)
    );

    theme[colorType].colorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    theme[colorType].onColorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    demoContainer.style.setProperty(`--forge-theme-on-${colorType}`, theme[colorType].onColor);
    demoContainer.style.setProperty(`--forge-theme-${colorType}`, theme[colorType].color);
  };

  const onColorChange = (color) => {
    setColors(`${color}`);
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
