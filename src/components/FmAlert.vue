<template>
  <div :class="['fm-alert__outer', { 'fm-alert__outer--floating': isFloating}]">
    <div :class="['fm-alert', 'fm-alert--' + type]">
      <slot>
      </slot>
      <div v-if="this.$slots.footer || (buttons && buttons.length)" class="fm-alert__footer">
        <slot name="footer">
        </slot>
        <div class="fm-alert__footer-buttons">
          <fm-button v-for="button in buttons" :key="button.value" v-bind="button" class="fm-alert__button"
                     @button-clicked="handleButton">
          </fm-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import FmButton from "./FmButton";

    export default {
        name: "FmAlert",
        components: {FmButton},
        props: {
            type: {
                type: String,
                default: 'none',
                validator: (val) => {
                    return [
                        'none', 'info', 'warn', 'danger', 'success',
                    ].indexOf(val) !== -1;
                },
            },
            buttons: {
                type: Array,
            },
            isFloating: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            handleButton(value) {
                this.$emit('button-clicked', value);
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";
  @import "../assets/scss/tools";

  .fm-alert {
    margin: .5rem auto .75rem;
    padding: .875rem .875rem .875rem .875rem;
    border-radius: .75rem;
    background-color: $white;
    color: $alertBlack;

    &__outer {
      &--floating {
        position: absolute;
        z-index: z('confirm');
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: $shadow;
        display: flex;
        align-items: center;
        justify-content: center;

        & .fm-alert {
          background-color: $white;
          padding: 1.125rem 1.25rem 1rem;
          border-radius: 1rem;
          width: 80%;
          min-width: 13rem;
          max-width: 18rem;
        }
      }
    }

    &--info {
      border-color: $info;
      background-color: $lightInfo;
    }

    &--warn {
      border: .0625rem solid $warn;
      background-color: $lightWarn;
    }

    &--danger {
      border: .0625rem solid $danger;
      background-color: $lightDanger;
    }

    &--success {
      border: .0625rem solid $success;
      background-color: $lightSuccess;
    }

    &--info, &--warn, &--danger, &--success {
      & .fm-alert__button--primary {
        background-color: $white;
        color: $black;
      }
    }

    &__footer {
      padding: .75rem 0 0;

      &-buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: -.25rem;
      }
    }

    &__button {
      &:nth-child(n + 2) {
        margin-left: 1rem;
      }
    }
  }
</style>
