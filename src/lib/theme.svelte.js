import { ThemeColor } from './themeColor.svelte';
class Theme {
  forgeThemePrefix = '--forge-theme';
  containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];
  #density = $state({ value: 'default' });
  #isDense = $state({ value: false });
  #enableColorContrastChecking = $state({ value: false });

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

  get enableColorContrastChecking() {
    return this.#enableColorContrastChecking.value;
  }

  set enableColorContrastChecking(value) {
    this.#enableColorContrastChecking.value = value;
  }

  #primary = new ThemeColor({
    color: '#3f51b5'
  });

  #secondary = new ThemeColor({
    color: '#ffc107'
  });

  #tertiary = new ThemeColor({
    color: '#3d5afe'
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
