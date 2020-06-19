<template>
  <div :class="['fm-block', {'fm-block--offset' : isOffset}]">
    <div :class="['fm-block__box', {'fm-block__box--offset' : isOffset}]">
      <ic-pin-s v-if="isPinned" class="fm-block__pin">
      </ic-pin-s>
      <slot></slot>
    </div>
    <div v-if="isOffset" class="fm-block__btn fm-block__btn-pin">
      <ic-pin-l class="fm-block__icon-l">
      </ic-pin-l>
    </div>
    <div v-if="isOffset" class="fm-block__btn fm-block__btn-del">
      <ic-bin class="fm-block__icon-l">
      </ic-bin>
    </div>
  </div>
</template>

<script>
    import IcPinS from "./icons/IcPinS";
    import IcPinL from "./icons/IcPinL";
    import IcBin from "./icons/IcBin";

    export default {
        name: "FmBlock",
        components: {IcBin, IcPinL, IcPinS},
        props: {
            isOffset: {
                type: Boolean,
                default: false,
            },
            isPinned: {
                type: Boolean,
                default: false,
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-block {
    position: relative;

    &__box {
      background-color: $white;
      box-shadow: 0 .05rem .5rem $shadow;
      margin: .3125rem .3125rem 1rem;
      padding: .75rem;
      border-radius: .3125rem;
      position: relative;
      z-index: 1;

      &--offset {
        transform: translateX(-7rem);
        z-index: 1;
        box-shadow: 0 .065rem 0 $shadow;
      }
    }

    &__pin {
      position: absolute;
      top: 1rem;
      right: .75rem;
      opacity: .6;
    }

    &__btn {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: -1;
      background-color: $danger;
      border-radius: .3125rem;
      color: $white;
      display: flex;
      justify-content: flex-end;
      padding: 1rem .65rem;

      &-pin {
        transform: translateX(-3.5rem);
        background-color: $warn;
        box-shadow: 0 .065rem 0 $shadow;
      }

      &-del {
        z-index: -2;
        box-shadow: 0 .05rem .5rem $shadow;
      }
    }
    &__icon-l {
      height: 100%;
      width: auto;
    }
  }
</style>
