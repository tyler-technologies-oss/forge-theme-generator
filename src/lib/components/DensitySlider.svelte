<script>
  import { theme } from '$lib/theme.svelte';

  let slider;
  const CSS_PROP = '--forge-spacing';
  const SPACE_LEVELS = [
    {
      label: 'xxxsmall',
      size: 2
    },
    {
      label: 'xxsmall',
      size: 4
    },
    {
      label: 'xsmall',
      size: 8
    },
    {
      label: 'small',
      size: 12
    },
    {
      label: 'medium',
      size: 16
    },
    {
      label: 'medium-large',
      size: 20
    },
    {
      label: 'large',
      size: 24
    },
    {
      label: 'xlarge',
      size: 32
    },
    {
      label: 'xxlarge',
      size: 48
    },
    {
      label: 'xxxlarge',
      size: 56
    }
  ];

  const onSliderChange = (event) => {
    const value = event.detail.value;
    const dc = document.querySelector('#demo-container');

    if (dc) {
      SPACE_LEVELS.forEach((level) => {
        dc.style.setProperty(`${CSS_PROP}-${level.label}`, `${level.size * value}px`);
      });

      if (value <= 0.75) {
        theme.isDense = true;
        theme.density = 'extra-small';
      }
      if (value > 0.75 && value <= 1) {
        theme.isDense = false;
        theme.density = 'default';
      }
      if (value > 1) {
        theme.isDense = false;
        theme.density = 'extra-large';
      }
    }
  };
</script>

<forge-stack gap="0">
  <span class="forge-typography--label2">Density</span>
  <forge-slider
    bind:this={slider}
    data-aria-label="Value"
    min="0.5"
    max="1.5"
    value="1"
    step=".1"
    onforge-slider-input={onSliderChange}
  ></forge-slider>
</forge-stack>
