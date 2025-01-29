<script>
  import { theme } from '$lib/theme.svelte';

  const onChange = (isChecked) => {
    theme.enableColorContrastChecking = isChecked;
  };
</script>

<forge-checkbox
  onchange={(e) => {
    onChange(e.target.checked);
  }}>Enable color contrast checking</forge-checkbox
>
