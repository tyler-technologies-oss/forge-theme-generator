<script>
	import chroma from 'chroma-js';
	import { theme } from '$lib/theme.svelte';
	let { colorType } = $props();
	let root = $state({});
	let firstLoad = false;

	const setOnColorBasedOnLuminance = (luminance) => {
		if (luminance <= 0.25) {
			return 'white';
		} else {
			return 'black';
		}
	};

	$effect(() => {
		root = document.documentElement;
		if (!firstLoad) {
			if (colorType === 'primary') {
				setColors(theme.primaryColor);
			}
			if (colorType === 'secondary') {
				setColors(theme.secondaryColor);
			}
			if (colorType === 'tertiary') {
				setColors(theme.tertiaryColor);
			}
			firstLoad = true;
		}
	});

	const setColors = (newColor) => {
		const luminance = chroma(newColor).luminance();

		switch (colorType) {
			case 'brand':
				theme.brandColor = newColor;
				root.style.setProperty(`--forge-theme-brand`, newColor);

				theme.onBrandColor = setOnColorBasedOnLuminance(luminance);
				root.style.setProperty(`--forge-theme-on-${colorType}`, theme.onBrandColor);
				break;

			case 'primary':
				theme.primaryColor = newColor;
				theme.primaryContainerColors = chroma
					.scale([theme.primaryColor, theme.primaryColorLightest])
					.mode('lab')
					.colors(4);

				theme.onPrimaryContainerColors = chroma
					.scale([theme.primaryContainerColors.at(-1), theme.primaryContainerColors.at(0)])
					.mode('lab')
					.colors(4);

				theme.primaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onPrimaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onPrimaryColor = setOnColorBasedOnLuminance(luminance);
				root.style.setProperty(`--forge-theme-on-${colorType}`, theme.onPrimaryColor);
				break;

			case 'secondary':
				theme.secondaryColor = newColor;
				theme.secondaryContainerColors = chroma
					.scale([theme.secondaryColor, theme.secondaryColorLightest])
					.mode('lab')
					.colors(4);

				theme.onSecondaryContainerColors = chroma
					.scale([theme.secondaryContainerColors.at(-1), theme.secondaryContainerColors.at(0)])
					.mode('lab')
					.colors(4);

				theme.secondaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onSecondaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onSecondaryColor = setOnColorBasedOnLuminance(luminance);
				root.style.setProperty(`--forge-theme-on-${colorType}`, theme.onSecondaryColor);
				break;

			case 'tertiary':
				theme.tertiaryColor = newColor;
				theme.tertiaryContainerColors = chroma
					.scale([theme.tertiaryColor, theme.tertiaryColorLightest])
					.mode('lab')
					.colors(4);

				theme.onTertiaryContainerColors = chroma
					.scale([theme.tertiaryContainerColors.at(-1), theme.tertiaryContainerColors.at(0)])
					.mode('lab')
					.colors(4);

				theme.tertiaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onTertiaryColorLevels.forEach((level) => {
					root.style.setProperty(`${level.level}`, level.color);
				});

				theme.onTertiaryColor = setOnColorBasedOnLuminance(luminance);
				root.style.setProperty(`--forge-theme-on-${colorType}`, theme.onTertiaryColor);
				break;
			default:
				console.log(`No color prop has been used`);
		}

		root.style.setProperty(`--forge-theme-${colorType}`, newColor);
	};

	const onColorChange = (color) => {
		setColors(`#${color}`);
	};
</script>

<forge-stack gap="8">
	<forge-text-field label-position="block-start">
		<label for={colorType}>{colorType} Color</label>
		{#if colorType === 'primary'}
			<input type="text" id={colorType} bind:value={theme.primaryColor} />
		{:else if colorType === 'secondary'}
			<input type="text" id={colorType} bind:value={theme.secondaryColor} />
		{:else}
			<input type="text" id={colorType} bind:value={theme.tertiaryColor} />
		{/if}

		<forge-icon-button
			aria-label="Default icon button"
			slot="end"
			id={`${colorType}-color-selector`}
		>
			<forge-icon name="format_color_fill" external></forge-icon>
		</forge-icon-button>
	</forge-text-field>
	<forge-popover
		anchor={`${colorType}-color-selector`}
		placement="bottom"
		position-strategy="fixed"
	>
		<forge-color-picker
			onforge-color-picker-change={(e) => {
				onColorChange(e.detail.hex);
			}}
		></forge-color-picker>
	</forge-popover>
</forge-stack>

<style>
	label {
		text-transform: capitalize;
	}
</style>
