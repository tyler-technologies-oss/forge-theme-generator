<script>
	import ChipsToolbar from './ChipsToolbar.svelte';
	import FooterToolbar from './FooterToolbar.svelte';
	import FormDemo from './FormDemo.svelte';
	import ProfileCard from './ProfileCard.svelte';
	import RequestCard from './RequestCard.svelte';
</script>

<div class="container">
	<div class="laptop">
		<div class="laptop__screen">
			<forge-scaffold class="scaffold-example">
				<div slot="header">
					<forge-app-bar title-text="Tyler Forge">
						<forge-icon slot="logo" name="forge_logo" external external-type="custom"></forge-icon>
					</forge-app-bar>
				</div>
				<forge-drawer slot="body-left">
					<aside>
						<forge-list navlist>
							<forge-list-item selected>
								<forge-icon slot="start" name="inbox" external></forge-icon>
								<a href="javascript: void(0)">Inbox</a>
							</forge-list-item>
							<forge-list-item>
								<forge-icon slot="start" name="send" external></forge-icon>
								<a href="javascript: void(0)">Outgoing</a>
							</forge-list-item>
							<forge-list-item>
								<forge-icon slot="start" name="drafts" external></forge-icon>
								<a href="javascript: void(0)">Drafts</a>
							</forge-list-item>
							<forge-list-item>
								<forge-icon slot="start" name="send" external></forge-icon>
								<a href="javascript: void(0)">Sent</a>
							</forge-list-item>
						</forge-list>
					</aside>
				</forge-drawer>
				<div slot="body">
					<ChipsToolbar />
					<div class="demo-grid padding-16">
						<ProfileCard />
						<FormDemo />
						<div class="span-full">
							<RequestCard />
						</div>

						<div class="span-full">
							<forge-slider range data-aria-label-start="Start" data-aria-label-end="End"
							></forge-slider>
						</div>
					</div>
					<forge-stack inline justify="end">
						<forge-fab style="margin: 24px;">
							<forge-icon name="add" external></forge-icon>
							<span slot="label">Create</span>
						</forge-fab>
					</forge-stack>
				</div>
				<div slot="footer">
					<FooterToolbar />
				</div>
			</forge-scaffold>
		</div>
		<!-- <div class="laptop__bottom">
			<div class="laptop__under"></div>
		</div>
		<div class="laptop__shadow"></div> -->
	</div>
</div>

<style>
	.laptop {
		position: relative;
		margin-inline: 48px;
		/* max-width: 80rem; */
		max-width: 1440px;
	}
	.laptop .laptop__screen {
		position: relative;
		z-index: 1;
		padding: 24px;
		border-radius: 32px;
		background: #ecf1f7;
		background-image: linear-gradient(to bottom, #333, #111);
		box-shadow: 0 0.1rem 0 #cfcfcf;
		border: 2px solid #ccc;
	}

	.laptop .laptop__bottom {
		position: relative;
		z-index: 1;
		margin-right: -24px;
		margin-left: -24px;
		height: 0.7rem;
		background: #e9eff5;
		background-image: linear-gradient(
			to right,
			#d2dde9 0%,
			#f9fcff 15%,
			#e5ebf2 40%,
			#e5ebf2 60%,
			#f9fcff 85%,
			#d2dde9 100%
		);
	}
	.laptop .laptop__bottom::before {
		display: block;
		margin: 0 auto;
		width: 20%;
		height: 0.7rem;
		border-radius: 0 0 0.2rem 0.2rem;
		background: #f6f9fc;
		background-image: linear-gradient(to right, #c3cfdb 0%, #f6f9fc 10%, #f6f9fc 90%, #c3cfdb 100%);
		content: ' ';
	}
	.laptop .laptop__under {
		position: absolute;
		top: 100%;
		left: 25%;
		display: block;
		width: 50%;
		height: 1.5rem;
		background: #e2e8f0;
		background-image: linear-gradient(to bottom, #e2e8f0, #bec7d1);
	}
	.laptop .laptop__under::after,
	.laptop .laptop__under::before {
		position: absolute;
		top: 0%;
		right: 100%;
		bottom: 0;
		display: block;
		width: 50%;
		border-bottom-left-radius: 100%;
		background: inherit;
		content: ' ';
	}
	.laptop .laptop__under::after {
		right: auto;
		left: 100%;
		border-bottom-right-radius: 100%;
		border-bottom-left-radius: 0;
	}
	.laptop .laptop__shadow {
		position: absolute;
		right: -10%;
		bottom: -2.5rem;
		left: -10%;
		z-index: 0;
		height: 2rem;
		background: radial-gradient(ellipse closest-side, #000, transparent);
		opacity: 0.5;
	}

	.padding-16 {
		padding: var(--forge-spacing-medium);
	}

	[slot='body'] {
		background-color: var(--forge-theme-surface-dim);
	}

	.span-full {
		grid-column: 1/-1;
	}

	.demo-grid {
		display: grid;
		grid-template-columns: 4fr 8fr;
		gap: 16px;
	}
</style>
