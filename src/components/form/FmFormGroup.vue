<template>
  <div class="fm-fg">
    <slot>
    </slot>
  </div>
</template>

<script>
    export default {
        name: "FmFormGroup"
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-fg {
    &:not(:last-of-type) {
      padding-bottom: 1.25rem;
      border-bottom: .0625rem solid $lightGrey;
      margin-bottom: 1.75rem;
    }
  }
</style>
