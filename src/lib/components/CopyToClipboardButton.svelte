<script>
  let toastOpen = false;
  let toast;

  $effect(() => {
    const answer = document.getElementById('copy-result');
    const copy = document.getElementById('copy-button');
    const selection = window.getSelection();
    const range = document.createRange();
    const textToCopy = document.getElementById('textToCopy');

    copy.addEventListener('click', function (e) {
      range.selectNodeContents(textToCopy);
      selection.removeAllRanges();
      selection.addRange(range);
      const successful = document.execCommand('copy');
      if (successful) {
        toast.open = true;
      } else {
        toastOpen = false;
      }
      window.getSelection().removeAllRanges();
    });
  });

  const openToast = () => {
    toastOpen = true;
  };
</script>

<forge-icon-button aria-label="Copy to clipboard" id="copy-button">
  <forge-icon name="content_copy" external></forge-icon>
  <forge-tooltip>Copy to clipboard</forge-tooltip>
</forge-icon-button>

<forge-toast bind:this={toast}>CSS Copied successfully!</forge-toast>

<style>
  forge-icon {
    font-size: 24px;
  }
</style>
