export class ThemeColor {
  constructor(config) {
    this.color = config.color;
    this.type = config.type;
  }

  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];

  #type = $state({ value: '' });
  #color = $state({ value: '' });
  #onColor = $state({ value: '' });
  #colorLightest = $state({ value: '' });
  #containerColors = $state([]);
  #onContainerColors = $state([]);

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
}
