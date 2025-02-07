<script>
  import { setContext } from 'svelte';
  import ColorPicker from '$lib/components/ColorPicker.svelte';
  import chroma, { Color } from 'chroma-js';
  import { theme } from '$lib/theme.svelte';
  import { json } from '@sveltejs/kit';
  import ThemeDemo from '$lib/components/ThemeDemo.svelte';
  import CopyToClipboardButton from '$lib/components/CopyToClipboardButton.svelte';
  import ShapeSlider from '$lib/components/ShapeSlider.svelte';
  import DensitySlider from '$lib/components/DensitySlider.svelte';
  import ThemeCardConfigurator from '$lib/components/ThemeCardConfigurator.svelte';
  import ColorPreview from '$lib/components/ColorPreview.svelte';
</script>

<ThemeDemo />
