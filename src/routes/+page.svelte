<script>
	import { setContext } from 'svelte';
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import chroma from 'chroma-js';
	import { theme } from '$lib/theme.svelte';
	import { json } from '@sveltejs/kit';
	import ThemeDemo from '$lib/components/ThemeDemo.svelte';
	import CopyToClipboardButton from '$lib/components/CopyToClipboardButton.svelte';
	import ShapeSlider from '$lib/components/ShapeSlider.svelte';
	let dialog;
</script>

<forge-scaffold>
	<forge-drawer slot="body-left" style="--forge-drawer-width: 320px;">
		<div style="padding: 16px">
			<forge-stack gap="32">
				<ColorPicker colorType="brand" />
				<ColorPicker colorType="primary" />
				<ColorPicker colorType="secondary" />
				<ColorPicker colorType="tertiary" />
				<ShapeSlider />
				<forge-button variant="raised" id="open-css-dialog">
					<forge-icon name="code" external></forge-icon>
					Get CSS
				</forge-button>
				<forge-dialog
					bind:this={dialog}
					preset="right-sheet"
					trigger="open-css-dialog"
					aria-labelledby="dialog-title"
					aria-describedby="dialog-description"
				>
					<div class="dialog">
						<forge-toolbar>
							<h1 slot="start" class="forge-typography--heading3">CSS Custom Properties</h1>
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<forge-icon-button
								slot="end"
								onclick={() => {
									dialog.open = false;
								}}
							>
								<forge-icon name="close" external></forge-icon>
							</forge-icon-button>
						</forge-toolbar>
						<div class="dialog-inner">
							<forge-stack gap="4">
								<forge-card>
									<div id="textToCopy">
										&#123;
										<div class="forge-typography--label3 spacer">
											--forge-theme-brand: {theme.brandColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-on-brand: {theme.onBrandColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-primary: {theme.primaryColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-on-primary: {theme.onPrimaryColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-secondary: {theme.secondaryColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-on-secondary: {theme.onSecondaryColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-tertiary: {theme.tertiaryColor};
										</div>
										<div class="forge-typography--label3 spacer">
											--forge-theme-on-tertiary: {theme.onTertiaryColor};
										</div>
										{#each theme.primaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										{#each theme.onPrimaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										{#each theme.secondaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										{#each theme.onSecondaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										{#each theme.tertiaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										{#each theme.onTertiaryColorLevels as level}
											<div class="forge-typography--label3 spacer">
												{level.level}: {level.color};
											</div>
										{/each}
										&#125;
									</div>

									<div class="button-container">
										<CopyToClipboardButton />
									</div>
								</forge-card>
							</forge-stack>
						</div>
					</div>
				</forge-dialog>
			</forge-stack>
		</div>
	</forge-drawer>
	<div class="demo-container" slot="body">
		<ThemeDemo />
	</div>
</forge-scaffold>

<style>
	[slot='body'] {
		overflow: hidden;
		padding-block: 24px;
	}

	.dialog-inner {
		display: flex;
		flex-direction: column;
		width: 768px;
		padding: 16px;
	}

	.spacer {
		padding-inline-start: 16px;
	}

	forge-card {
		position: relative;
	}

	.button-container {
		position: absolute;
		top: 16px;
		right: 16px;
	}
</style>
