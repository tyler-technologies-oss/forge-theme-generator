export class ThemeColor {
  constructor(config) {
    this.color = config.color;
  }

  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];

  #color = $state({ value: '' });
  #onColor = $state({ value: '' });
  #colorLightest = $state({ value: '' });
  #containerColors = $state([]);
  #onContainerColors = $state([]);

  colorLevels = $derived.by(() => {
    return this.containerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-primary-${level}`,
        color: this.containerColors[index]
      };
    });
  });

  onColorLevels = $derived.by(() => {
    return this.containerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-on-primary-${level}`,
        color: this.onContainerColors[index]
      };
    });
  });

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
}
