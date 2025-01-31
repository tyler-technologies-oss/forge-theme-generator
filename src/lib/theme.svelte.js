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
    color: '#3f51b5',
    colorLightest: '#f7f8fc'
  });
}

export const theme = new Theme();
