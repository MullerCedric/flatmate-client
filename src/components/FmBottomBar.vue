<template>
  <div class="fm-bottom-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "FmBottomBar",
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-bottom-bar {
    line-height: 1;
    background-color: $white;
    border-top: 1px solid $lighterGrey;
    padding: 0 .5rem;
    display: flex;
    justify-content: space-around;
  }
</style>
