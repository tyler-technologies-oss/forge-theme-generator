class Theme {
	forgeThemePrefix = '--forge-theme';
	containerColorLevels = ['container-minimum', 'container-low', 'container', 'container-high'];
	#density = $state({ value: 'default' });

	get density() {
		return this.#density.value;
	}

	set density(value) {
		this.#density.value = value;
	}

	// BRAND
	#brandColor = $state({ value: '#000' });
	#onbrandColor = $state({ value: 'white' });

	get brandColor() {
		return this.#brandColor.value;
	}

	set brandColor(value) {
		this.#brandColor.value = value;
	}

	get onbrandColor() {
		return this.#onbrandColor.value;
	}

	set onbrandColor(value) {
		this.#onbrandColor.value = value;
	}

	// PRIMARY
	#primaryColor = $state({ value: '#3f51b5' });
	#onprimaryColor = $state({ value: '' });
	#primaryColorLightest = $state({ value: '#f7f8fc' });
	#primaryContainerColors = $state([]);
	#onprimaryContainerColors = $state([]);

	primaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-primary-${level}`,
				color: this.primaryContainerColors[index]
			};
		});
	});

	onprimaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-primary-${level}`,
				color: this.onprimaryContainerColors[index]
			};
		});
	});

	get primaryColor() {
		return this.#primaryColor.value;
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

	// SECONDARY
	#secondaryColor = $state({ value: '#ffc107' });
	#onsecondaryColor = $state({ value: '' });
	#secondaryColorLightest = $state({ value: '#fffdf5' });
	#secondaryContainerColors = $state([]);
	#onsecondaryContainerColors = $state([]);

	secondaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-secondary-${level}`,
				color: this.secondaryContainerColors[index]
			};
		});
	});

	onsecondaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-secondary-${level}`,
				color: this.onsecondaryContainerColors[index]
			};
		});
	});

	get secondaryColor() {
		return this.#secondaryColor.value;
	}

	set secondaryColor(value) {
		this.#secondaryColor.value = value;
	}

	get onsecondaryColor() {
		return this.#onsecondaryColor.value;
	}

	set onsecondaryColor(value) {
		this.#onsecondaryColor.value = value;
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

	get onsecondaryContainerColors() {
		return this.#onsecondaryContainerColors;
	}

	set onsecondaryContainerColors(value) {
		this.#onsecondaryContainerColors = value;
	}

	// TERTIARY
	#tertiaryColor = $state({ value: '#3d5afe' });
	#ontertiaryColor = $state({ value: '' });
	#tertiaryColorLightest = $state({ value: '#f7f8ff' });
	#tertiaryContainerColors = $state([]);
	#ontertiaryContainerColors = $state([]);

	tertiaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-tertiary-${level}`,
				color: this.tertiaryContainerColors[index]
			};
		});
	});

	ontertiaryColorLevels = $derived.by(() => {
		return this.containerColorLevels.map((level, index) => {
			return {
				level: `${this.forgeThemePrefix}-on-tertiary-${level}`,
				color: this.ontertiaryContainerColors[index]
			};
		});
	});

	get tertiaryColor() {
		return this.#tertiaryColor.value;
	}

	set tertiaryColor(value) {
		this.#tertiaryColor.value = value;
	}

	get ontertiaryColor() {
		return this.#ontertiaryColor.value;
	}

	set ontertiaryColor(value) {
		this.#ontertiaryColor.value = value;
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

	get ontertiaryContainerColors() {
		return this.#ontertiaryContainerColors;
	}

	set ontertiaryContainerColors(value) {
		this.#ontertiaryContainerColors = value;
	}
}

export const theme = new Theme();
