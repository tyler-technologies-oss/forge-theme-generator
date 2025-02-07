import { ThemeColor } from './themeColor.svelte';
class Theme {
  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];
  #density = $state({ value: 'default' });
  #isDense = $state({ value: false });

  get density() {
    return this.#density.value;
  }

  set density(value) {
    this.#density.value = value;
  }

  get isDense() {
    return this.#density.value;
  }

  set isDense(value) {
    this.#density.value = value;
  }

  #primary = new ThemeColor({
    color: '#3f51b5',
    type: 'primary'
  });

  #secondary = new ThemeColor({
    color: '#ffc107',
    type: 'secondary'
  });

  #tertiary = new ThemeColor({
    color: '#3d5afe',
    type: 'tertiary'
  });

  get primary() {
    return this.#primary;
  }

  set primary(value) {
    this.#primary.color.value = value;
  }

  get secondary() {
    return this.#secondary;
  }

  set secondary(value) {
    this.#secondary.color.value = value;
  }

  get tertiary() {
    return this.#tertiary;
  }

  set tertiary(value) {
    this.#tertiary.color.value = value;
  }
}

export const theme = new Theme();
