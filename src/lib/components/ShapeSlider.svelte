<script>
  let slider;
  const CSS_PROP = '--forge-shape';
  const shapeSizes = [
    {
      label: 'none',
      size: 0
    },
    {
      label: 'small',
      size: 8
    },
    {
      label: 'medium',
      size: 16
    },
    {
      label: 'large',
      size: 24
    }
  ];

  const onSliderChange = (event) => {
    const value = event.detail.value;

    const dc = document.querySelector('#demo-container');
    dc.style.setProperty(`${CSS_PROP}-factor`, `${value}`);
    dc.style.setProperty(`${CSS_PROP}-full`, `${value}px`);
  };
</script>

<forge-stack gap="0">
  <span class="forge-typography--label2">Shape</span>
  <forge-slider
    bind:this={slider}
    data-aria-label="Value"
    min="0"
    max="12"
    value="1"
    step=".1"
    onforge-slider-input={onSliderChange}
  ></forge-slider>
</forge-stack>
