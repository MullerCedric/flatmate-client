<template>
  <div class="fm-fl">
    <div class="fm-fl__label" @click="showTips = !showTips">
      <div v-if="['checkbox', 'radio'].indexOf(inputType) !== -1" class="fm-fl__label-text">
        {{ label }}{{ required ? '*' : '' }}
      </div>
      <label v-if="['checkbox', 'radio'].indexOf(inputType) === -1" :for="fiName" class="fm-fl__label-text">
        {{ label }}{{ required ? '*' : '' }}
      </label>
      <ic-info v-if="$slots.tips" :is-active="showTips" :has-error="!isValid"
               width="18" height="18" class="fm-fl__i-icon" :class="'fm-fi__i-icon--' + fiName">
      </ic-info>
    </div>

    <div v-if="$slots.tips" class="fm-fl__tips" @click="showTips = !showTips"
         :class="{
        'fm-fl__tips--active': showTips,
        'fm-fl__tips--error': !isValid
    }">
      <div class="fm-fl__tip-arrow" :style="'left:' + arrowPos + 'px'"></div>
      <slot name="tips"></slot>
    </div>
  </div>
</template>

<script>
    import IcInfo from "../icons/IcInfo";

    export default {
        name: "FmFormLabel",
        components: {IcInfo},
        props: {
            label: {
                type: String,
                default: 'Label',
                required: true,
            },
            inputType: {
                type: String,
                default: 'text',
            },
            fiName: {
                type: String,
                required: true,
            },
            required: {
                type: Boolean,
                default: false,
            },
            isValid: {
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
                showTips: false,
                arrowPos: 32,
            }
        },
        mounted() {
            if (this.$slots.tips) {
                const icon = window.document.querySelector('.fm-fi__i-icon--' + this.fiName);
                if (icon) {
                    this.arrowPos = Math.round(icon.getBoundingClientRect().left - 18);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-fl {
    &__label {
      display: flex;
      align-items: center;
      margin-bottom: .5rem;
      font-size: .875rem;

      &-text {
        opacity: .8;
      }
    }

    &__i-icon {
      margin-left: .25rem
    }

    &__tips {
      position: relative;
      overflow: hidden;
      padding: 0 .5rem;
      margin: 0;
      max-height: 0;
      transition: padding .2s, margin .2s;
      background-color: $black;
      color: $white;
      border-radius: .5rem;

      &--active {
        overflow: visible;
        max-height: 100%;
        padding: .625rem .5rem .75rem;
        margin-bottom: .5rem;
      }
    }

    &__tip-arrow {
      position: absolute;
      width: .5rem;
      height: .5rem;
      margin-top: -.25rem;
      transform: rotate(-45deg);
      background-color: $black;
      border-top-right-radius: .125rem;
      top: 0;
    }
  }
</style>
