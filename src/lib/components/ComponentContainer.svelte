<script>
  let { title, children } = $props();
</script>

<forge-card class="preview-card">
  <div class="preview-container">
    <forge-toolbar>
      <h2 slot="start" class="forge-typography--heading2">{title}</h2>
    </forge-toolbar>
    <div class="padding-16">
      {@render children()}
    </div>
  </div>
</forge-card>

<style>
  .preview-card {
    --forge-card-padding: 0;
  }

  h2 {
    margin: 0;
  }
</style>
