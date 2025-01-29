<script>
  import { theme } from '$lib/theme.svelte';
</script>

<forge-card>
  <form>
    <forge-text-field class="span-full" label-position="block-start" density={theme.density}>
      <label for="input-text-01">Name</label>
      <input type="text" id="input-text-1" />
    </forge-text-field>
    <forge-text-field class="grid-3" label-position="block-start" density={theme.density}>
      <label for="input-text-2">Street</label>
      <input type="text" id="input-text-2" />
    </forge-text-field>
    <forge-text-field class="grid-3" label-position="block-start" density={theme.density}>
      <label for="input-text-3">State</label>
      <input type="text" id="input-text-3" />
    </forge-text-field>

    <forge-text-field class="grid-2" label-position="block-start" density={theme.density}>
      <input type="text" id="input-text-4" />
      <label for="input-text-4">Zip</label>
    </forge-text-field>
    <forge-text-field class="grid-2" label-position="block-start" density={theme.density}>
      <input type="text" id="input-text-5" />
      <label for="input-text-5">Email</label>
    </forge-text-field>
    <forge-text-field class="grid-2" label-position="block-start" density={theme.density}>
      <input type="text" id="input-text-6" />
      <label for="input-text-6">Phone</label>
    </forge-text-field>

    <div class="grid-3">
      <forge-stack gap="0">
        <forge-label legend>Select multiple options</forge-label>
        <forge-checkbox checked>Label</forge-checkbox>
        <forge-checkbox checked>Label</forge-checkbox>
        <forge-checkbox>Label</forge-checkbox>
      </forge-stack>
    </div>

    <forge-radio-group class="grid-3">
      <forge-stack gap="0">
        <forge-label legend>Select one option</forge-label>
        <forge-radio value="option1" checked>Option 1</forge-radio>
        <forge-radio value="option2">Option 2</forge-radio>
        <forge-radio value="option3">Option 3</forge-radio>
      </forge-stack>
    </forge-radio-group>
  </form>
</forge-card>

<style>
  form {
    display: grid;
    gap: var(--forge-spacing-medium);
    grid-template-columns: repeat(6, 1fr);
  }

  .grid-2 {
    grid-column: span 2;
  }
  .grid-3 {
    grid-column: span 3;
  }
  .span-full {
    grid-column: 1/-1;
  }

  @media screen and (max-width: 1360px) {
    form {
      grid-template-columns: 1fr;
    }

    .grid-2 {
      grid-column: 1/-1;
    }
    .grid-3 {
      grid-column: 1/-1;
    }
  }
</style>
