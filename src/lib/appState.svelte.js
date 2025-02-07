class AppState {
  constructor() {}

  // Palette page
  #fontSizeSelected = $state({ value: 16 });

  get fontSizeSelected() {
    return this.#fontSizeSelected.value;
  }

  set fontSizeSelected(value) {
    this.#fontSizeSelected.value = value;
  }
}

export const appState = new AppState();
