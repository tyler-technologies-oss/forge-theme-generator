import { ThemeColor } from './themeColor.svelte';
class Theme {
  #density = $state({ value: 'default' });
  #isDense = $state({ value: false });
  #desiredContrastRatio = $state({ value: '7' });

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

  get desiredContrastRatio() {
    return this.#desiredContrastRatio.value;
  }

  set desiredContrastRatio(value) {
    this.#desiredContrastRatio.value = value;
  }

  #primary = new ThemeColor({
    color: '#222222',
    type: 'primary'
  });

  #secondary = new ThemeColor({
    color: '#444444',
    type: 'secondary'
  });

  #tertiary = new ThemeColor({
    color: '#707070',
    type: 'tertiary'
  });

  #success = new ThemeColor({
    color: '#2e7d32',
    type: 'success'
  });

  #error = new ThemeColor({
    color: '#b00020',
    type: 'error'
  });

  #warning = new ThemeColor({
    color: '#d14900',
    type: 'warning'
  });

  #info = new ThemeColor({
    color: '#6b7280',
    type: 'info'
  });

  #surface = new ThemeColor({
    color: '#ffffff',
    type: 'surface'
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

  get surface() {
    return this.#surface;
  }

  set surface(value) {
    this.#surface.color.value = value;
  }

  get success() {
    return this.#success;
  }

  set success(value) {
    this.#success.color.value = value;
  }

  get error() {
    return this.#error;
  }

  set error(value) {
    this.#error.color.value = value;
  }

  get warning() {
    return this.#warning;
  }

  set warning(value) {
    this.#warning.color.value = value;
  }

  get info() {
    return this.#info;
  }

  set info(value) {
    this.#info.color.value = value;
  }
}

export const theme = new Theme();
