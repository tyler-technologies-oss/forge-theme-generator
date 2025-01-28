<forge-card>
	<div class="grid-container">
		<div class="illustration-container">
			<!-- <img
				src="https://cdn.forge.tylertech.com/v1/images/spot/land-zoning-spot.png"
				alt="Land Zoning"
			/> -->
			<forge-icon
				name="forge_logo"
				external
				external-type="custom"
				style="font-size: 48px; color: var(--forge-theme-primary)"
			></forge-icon>
		</div>
		<div class="date-request">
			<forge-label-value>
				<div slot="label">07/18/2019</div>
				<div slot="value">2 Pending requests to approve</div>
			</forge-label-value>
		</div>
		<div class="view-all">
			<forge-button>
				<a href="javascript: void(0);">
					View all
					<forge-icon name="open_in_new"></forge-icon>
				</a>
			</forge-button>
		</div>
	</div>
</forge-card>

<style>
	forge-card {
		--forge-card-padding: 0;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: var(--forge-spacing-medium);
		align-items: center;
		border-left: 4px solid var(--forge-theme-primary);
		padding: 8px;
	}

	.illustration-container {
		display: flex;
		justify-content: center;
	}

	.illustration-container img {
		max-width: 64px;
		grid-column: 1/2;
	}

	.date-request {
		grid-column: 2/9;
	}

	.view-all {
		grid-column: 9/13;
		justify-self: end;
	}
</style>
