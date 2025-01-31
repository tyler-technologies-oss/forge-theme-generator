export class ThemeColor {
  constructor(config) {
    this.#color.set(config.color);
    this.#colorLightest.set(config.colorLightest);
  }

  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];

  // PRIMARY
  #color = $state({ value: '#3f51b5' });
  #onColor = $state({ value: '' });
  #colorLightest = $state({ value: '#f7f8fc' });
  #containerColors = $state([]);
  #onContainerColors = $state([]);

  colorLevels = $derived.by(() => {
    return this.containerColorLevels.map((level, index) => {
      return {
        level: `${this.forgeThemePrefix}-primary-${level}`,
        color: this.primaryContainerColors[index]
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

  set primaryColor(value) {
    this.#primaryColor.value = value;
  }

  get onprimaryColor() {
    return this.#onprimaryColor.value;
  }

  set onprimaryColor(value) {
    this.#onprimaryColor.value = value;
  }

  get primaryColorLightest() {
    return this.#primaryColorLightest.value;
  }

  set primaryColorLightest(value) {
    this.#primaryColorLightest.value = value;
  }

  get primaryContainerColors() {
    return this.#primaryContainerColors;
  }

  set primaryContainerColors(value) {
    this.#primaryContainerColors = value;
  }

  get onprimaryContainerColors() {
    return this.#onprimaryContainerColors;
  }

  set onprimaryContainerColors(value) {
    this.#onprimaryContainerColors = value;
  }
}
