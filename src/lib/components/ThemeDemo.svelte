<script>
  import { theme } from '$lib/theme.svelte';
  import ChipsToolbar from './ChipsToolbar.svelte';
  import FooterToolbar from './FooterToolbar.svelte';
  import ForgeMenuDemo from './ForgeMenuDemo.svelte';
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
          <forge-banner theme="info">This is a forge-banner using the info theme.</forge-banner>
        </div>
        <forge-drawer slot="body-left">
          <aside>
            <forge-list navlist dense={theme.isDense}>
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
          <forge-toolbar>
            <h2 class="forge-typography--heading3" slot="start">Toolbar title</h2>
            <div slot="end">
              <ForgeMenuDemo />
            </div>
          </forge-toolbar>
          <div class="chips-container">
            <forge-chip-set>
              <forge-chip value="payments">Payments</forge-chip>
              <forge-chip value="bills">Bills</forge-chip>
              <forge-chip value="adjustments">Adjustments</forge-chip>
            </forge-chip-set>
          </div>

          <div class="demo-grid padding-16">
            <ProfileCard />
            <FormDemo />
            <div class="span-full">
              <RequestCard />
            </div>

            <!-- <div class="span-full">
              <forge-slider range data-aria-label-start="Start" data-aria-label-end="End"
              ></forge-slider>
            </div> -->
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
  </div>
</div>

<style>
  .chips-container {
    padding-inline: var(--forge-spacing-medium);
    padding-block-start: var(--forge-spacing-medium);
  }
  .laptop {
    position: relative;
    margin-inline: 32px;
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

  .padding-16 {
    padding: var(--forge-spacing-medium);
  }

  [slot='body'] {
    background-color: var(--forge-theme-surface-dim);
    overflow-y: auto;
    max-height: 768px;
  }

  .span-full {
    grid-column: 1/-1;
  }

  .demo-grid {
    display: grid;
    grid-template-columns: 4fr 8fr;
    gap: var(--forge-spacing-medium);
  }

  @media screen and (max-width: 1360px) {
    .demo-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
