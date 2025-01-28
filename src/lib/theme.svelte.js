class Theme {
	forgeThemePrefix = '--forge-theme';
	containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];

	// PRIMARY
	#primaryColor = $state({ value: '#3f51b5' });
	#primaryColorLightest = $state({ value: '#f7f8fc' });
	#primaryContainerColors = $state([]);
	#onPrimaryContainerColors = $state([]);

	primaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-primary-${level}`,
				color: this.primaryContainerColors[index]
			};
		});
	});

	onPrimaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-primary-${level}`,
				color: this.onPrimaryContainerColors[index]
			};
		});
	});

	get primaryColor() {
		return this.#primaryColor.value;
	}

	set primaryColor(value) {
		this.#primaryColor.value = value;
	}

	get primaryColorLightest() {
		return this.#primaryColorLightest.value;
	}

	get primaryContainerColors() {
		return this.#primaryContainerColors;
	}

	set primaryContainerColors(value) {
		this.#primaryContainerColors = value;
	}

	get onPrimaryContainerColors() {
		return this.#onPrimaryContainerColors;
	}

	set onPrimaryContainerColors(value) {
		this.#onPrimaryContainerColors = value;
	}

	// SECONDARY
	#secondaryColor = $state({ value: '#ffc107' });
	#secondaryColorLightest = $state({ value: '#fffdf5' });
	#secondaryContainerColors = $state([]);
	#onSecondaryContainerColors = $state([]);

	secondaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-secondary-${level}`,
				color: this.secondaryContainerColors[index]
			};
		});
	});

	onSecondaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-secondary-${level}`,
				color: this.onSecondaryContainerColors[index]
			};
		});
	});

	get secondaryColor() {
		return this.#secondaryColor.value;
	}

	set secondaryColor(value) {
		this.#secondaryColor.value = value;
	}

	get secondaryColorLightest() {
		return this.#secondaryColorLightest.value;
	}

	get secondaryContainerColors() {
		return this.#secondaryContainerColors;
	}

	set secondaryContainerColors(value) {
		this.#secondaryContainerColors = value;
	}

	get onSecondaryContainerColors() {
		return this.#onSecondaryContainerColors;
	}

	set onSecondaryContainerColors(value) {
		this.#onSecondaryContainerColors = value;
	}

	// TERTIARY
	#tertiaryColor = $state({ value: '#3d5afe' });
	#tertiaryColorLightest = $state({ value: '#f7f8ff' });
	#tertiaryContainerColors = $state([]);
	#onTertiaryContainerColors = $state([]);

	tertiaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-tertiary-${level}`,
				color: this.tertiaryContainerColors[index]
			};
		});
	});

	onTertiaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-tertiary-${level}`,
				color: this.onTertiaryContainerColors[index]
			};
		});
	});

	get tertiaryColor() {
		return this.#tertiaryColor.value;
	}

	set tertiaryColor(value) {
		this.#tertiaryColor.value = value;
	}

	get tertiaryColorLightest() {
		return this.#tertiaryColorLightest.value;
	}

	get tertiaryContainerColors() {
		return this.#tertiaryContainerColors;
	}

	set tertiaryContainerColors(value) {
		this.#tertiaryContainerColors = value;
	}

	get onTertiaryContainerColors() {
		return this.#onTertiaryContainerColors;
	}

	set onTertiaryContainerColors(value) {
		this.#onTertiaryContainerColors = value;
	}
}

export const theme = new Theme();
