<template>
  <div class="fm-block" :class="{'fm-block--clickable' : isClickable}">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "FmBlock",
        props: {
            isClickable: {
                type: Boolean,
                default: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-block {
    background-color: $white;
    box-shadow: 0 .05rem .5rem $shadow;
    margin: .3125rem .3125rem 1rem;
    padding: .75rem;
    border-radius: .3125rem;

    &--clickable {
      &:hover {
        box-shadow: .05rem .1rem .5rem $shadow;
      }
    }
  }
</style>
