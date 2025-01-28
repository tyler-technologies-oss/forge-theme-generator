<forge-card>
	<div class="container">
		<div class="avatar">
			<img src="https://png.pngtree.com/svg/20170602/0db185fb9c.svg" alt="Avatar" />
		</div>
		<h2 class="forge-typography--heading4 overflow">Rick Dalton</h2>
		<span class="location">Hollywood, CA</span>
		<div class="overflow">
			<a href="mailto:email@tylertech.com" class="forge-hyperlink">rick.dalton@tylertech.com</a>
		</div>
	</div>
	<forge-toolbar inverted>
		<forge-button slot="start">View Profile</forge-button>
		<forge-icon-button slot="end" aria-label="View notifications">
			<forge-icon name="notifications" external></forge-icon>
		</forge-icon-button>
	</forge-toolbar>
</forge-card>

<style>
	forge-card {
		--forge-card-padding: 0;
		height: fit-content;
	}

	.container {
		display: flex;
		justify-content: center;
		justify-items: center;
		flex-direction: column;
		align-content: center;
		align-items: center;
		margin-block-end: var(--forge-spacing-medium);
	}

	.container h2 {
		margin: 0;
	}

	.avatar img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-block-start: var(--forge-spacing-medium);
		margin-block-end: var(--forge-spacing-xsmall);
	}

	.location {
		margin-block-end: var(--forge-spacing-medium);
	}

	.overflow {
		overflow: hidden;
		text-overflow: ellipsis;
		width: 180px;
		text-align: center;
		white-space: nowrap;
	}
</style>
