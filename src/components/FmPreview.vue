<template>
  <div class="fm-preview">
    <div class="fm-preview__outer">
      Prochainement...
    </div>
    <div class="fm-preview__inner">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FmPreview"
    }
</script>

<style lang="scss">
  @import "../assets/scss/settings";

  .fm-preview {
    position: relative;

    &__outer {
      position: absolute;
      z-index: 999;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(255, 255, 255, .15);
      box-shadow: 0 0 1rem rgba(255, 255, 255, .35);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: $bold;
      font-size: 1.75rem;
      text-shadow: 0 0 .5rem rgba(255, 255, 255, .9);
      color: black;
    }

    &__inner {
      filter: blur(.25rem);

      & * {
        font-family: 'BLOKK', "Maven Pro", sans-serif !important;
        word-spacing: -.125rem !important;
      }
    }
  }
</style>
