import chroma, { contrast } from 'chroma-js';
import { theme } from './theme.svelte';
export class ThemeColor {
  constructor(config) {
    this.color = config.color;
    this.type = config.type;
  }

  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-high', 'container', 'container-low', 'container-minimum'];
  surfaceContainerColorLevels = [
    ...this.containerColorLevels,
    'inverse',
    'dim',
    'bright',
    'bright-shadow'
  ];

  #type = $state({ value: '' });
  #color = $state({ value: '' });
  #onColor = $state({ value: '' });
  #colorLightest = $state({ value: '' });
  #containerColors = $state([]);
  #onContainerColors = $state([]);

  #surfaceColor = $state({ value: '' });
  #onSurfaceColor = $state({ value: '' });
  #surfaceColorLightest = $state({ value: '' });
  #surfaceContainerColors = $state([]);
  #onSurfaceContainerColors = $state([]);

  colorLevels = $derived.by(() => {
    return this.containerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-${this.type}-${level}`,
        color: this.containerColors[index]
      };
    });
  });

  onColorLevels = $derived.by(() => {
    return this.containerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-on-${this.type}-${level}`,
        color: this.onContainerColors[index]
      };
    });
  });

  surfaceColorLevels = $derived.by(() => {
    return this.surfaceContainerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-${this.type}-${level}`,
        color: this.surfaceContainerColors[index]
      };
    });
  });

  onSurfaceColorLevels = $derived.by(() => {
    return this.surfaceContainerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-on-${this.type}-${level}`,
        color: this.onSurfaceContainerColors[index]
      };
    });
  });

  setColors = (newColor) => {
    let isValidColor = chroma.valid(newColor);
    if (!isValidColor) {
      return;
    }
    const demoContainer = document.querySelector('#demo-container');
    this.color = newColor;
    this.onColor = this.getAccessibleTextColor(newColor);
    this.colorLightest = chroma(newColor).tint(0.95);

    this.containerColors = chroma
      .scale([chroma(newColor).brighten(2), this.colorLightest])
      .mode('oklch')
      .colors(this.containerColorLevels.length);

    this.onContainerColors = this.containerColors.map((cc, index) =>
      this.getAccessibleTextColor(cc, index)
    );

    this.colorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    this.onColorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    demoContainer.style.setProperty(`--forge-theme-on-${this.type}`, this.onColor);
    demoContainer.style.setProperty(`--forge-theme-${this.type}`, this.color);

    // Manual override for neutral theme demo:
    const overrideColor = '#f5f5f5';
    demoContainer.style.setProperty(`--forge-theme-on-primary`, overrideColor);
    demoContainer.style.setProperty(`--forge-theme-on-secondary`, overrideColor);
    demoContainer.style.setProperty(`--forge-theme-on-tertiary`, overrideColor);
    theme.primary.onColor = overrideColor;
    theme.secondary.onColor = overrideColor;
    theme.tertiary.onColor = overrideColor;
  };

  setSurfaceColors = (newColor) => {
    let isValidColor = chroma.valid(newColor);
    if (!isValidColor) {
      return;
    }
    const demoContainer = document.querySelector('#demo-container');
    this.surfaceColor = newColor;
    this.onSurfaceColor = this.getAccessibleTextColor(newColor);
    this.onSurfaceColorDarkest = '#333333';

    this.surfaceContainerColors = chroma
      // .scale([this.onSurfaceColorDarkest, chroma(newColor).brighten(2)])
      .scale(['white', 'black'])
      .mode('oklch')
      .colors(this.surfaceContainerColorLevels.length);

    this.onSurfaceContainerColors = this.surfaceContainerColors.map((cc, index) => {
      if (chroma(this.surfaceColor).luminance() > 0.5) {
        return '#ffffff';
      } else {
        return '#000000';
      }
    });

    this.surfaceColorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    this.onSurfaceColorLevels.forEach((level) => {
      demoContainer.style.setProperty(`${level.level}`, level.color);
    });

    demoContainer.style.setProperty(`--forge-theme-on-${this.type}`, this.onSurfaceColor);
    demoContainer.style.setProperty(`--forge-theme-${this.type}`, this.surfaceColor);
  };

  getAccessibleTextColor = (containerColor, containerColorIndex) => {
    const contrastRatio = theme.desiredContrastRatio;
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
            this.containerColors[containerColorIndex] = chroma(
              this.containerColors[containerColorIndex]
            ).darken(0.1);
          }
          break;
        }

        iterations++;
      }
    }
    return adjustedColor.hex();
  };

  get type() {
    return this.#type.value;
  }

  set type(value) {
    this.#type.value = value;
  }

  get color() {
    return this.#color.value;
  }

  set color(value) {
    this.#color.value = value;
  }

  get onColor() {
    return this.#onColor.value;
  }

  set onColor(value) {
    this.#onColor.value = value;
  }

  get colorLightest() {
    return this.#colorLightest.value;
  }

  set colorLightest(value) {
    this.#colorLightest.value = value;
  }

  get containerColors() {
    return this.#containerColors;
  }

  set containerColors(value) {
    this.#containerColors = value;
  }

  get onContainerColors() {
    return this.#onContainerColors;
  }

  set onContainerColors(value) {
    this.#onContainerColors = value;
  }

  // SURFACE COLORS
  get surfaceColor() {
    return this.#surfaceColor.value;
  }

  set surfaceColor(value) {
    this.#surfaceColor.value = value;
  }

  get onSurfaceColor() {
    return this.#onSurfaceColor.value;
  }

  set onSurfaceColor(value) {
    this.#onSurfaceColor.value = value;
  }

  get surfaceColorLightest() {
    return this.#surfaceColorLightest.value;
  }

  set surfaceColorLightest(value) {
    this.#surfaceColorLightest.value = value;
  }

  get surfaceContainerColors() {
    return this.#surfaceContainerColors;
  }

  set surfaceContainerColors(value) {
    this.#surfaceContainerColors = value;
  }

  get onSurfaceContainerColors() {
    return this.#onSurfaceContainerColors;
  }

  set onSurfaceContainerColors(value) {
    this.#onSurfaceContainerColors = value;
  }
}
