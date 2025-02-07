<script>
  import { theme } from '$lib/theme.svelte';
  import chroma from 'chroma-js';

  let showContrastWarning = $state({ value: false });
  let { group } = $props();
  console.log(group);
  console.log(theme.combinedContainerColors);

  $effect(() => {
    let contrastTest = chroma.contrast(`${group[0].color}`, `${group[1].color}`);

    if (contrastTest < 4.5) {
      showContrastWarning.value = true;
    } else {
      showContrastWarning.value = false;
    }
  });
</script>

<forge-stack>
  <div class="container">
    <div class="color-container" style={`background-color: ${group[0].color}`}>
      <p style={`color: ${group[1].color}`}>{group[1].level} - {group[1].color}</p>
    </div>
    <div>
      {#if showContrastWarning.value}
        <forge-icon name="warning" theme="error" external></forge-icon>
      {/if}
    </div>
  </div>
</forge-stack>

<style>
  .container {
    display: grid;
    grid-template-columns: 8fr 4fr;
    gap: 16px;
    align-items: center;
  }
  .color-container {
    padding-inline: 16px;
    border-radius: 4px;
  }
</style>
