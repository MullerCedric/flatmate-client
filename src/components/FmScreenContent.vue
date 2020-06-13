<template>
  <main :class="['fm-screen__content', {'fm-screen__content--full-frame': isFullFrame}]">
    <slot></slot>
  </main>
</template>

<script>
    export default {
        name: "FmScreenContent",
        props: {
            isFullFrame: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style lang="scss" scoped>
  .fm-screen__content {
    padding: .5rem 1.5rem 1.75rem;
    max-height: 100%;
    overflow: auto;

    &--full-frame {
      padding: .5rem 0 1.75rem;
    }
  }
</style>
