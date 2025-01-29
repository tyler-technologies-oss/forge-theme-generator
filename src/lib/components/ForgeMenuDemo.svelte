<script>
  const options = [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' }
  ];
</script>

<!-- <forge-button-toggle-group aria-label="Choose communication type" value="email">
  <forge-button-toggle value="email">By email</forge-button-toggle>
  <forge-button-toggle value="mail">By mail</forge-button-toggle>
  <forge-button-toggle value="phone">By phone</forge-button-toggle>
</forge-button-toggle-group> -->

<forge-menu {options}>
  <forge-button type="button">
    <forge-icon name="expand_more" slot="end" external></forge-icon>
    Menu
  </forge-button>
</forge-menu>
