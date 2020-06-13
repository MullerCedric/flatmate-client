<template>
  <div :class="['fm-alert', 'fm-alert--' + type]">
    <slot>
    </slot>
    <div v-if="this.$slots.footer || (buttons && buttons.length)" class="fm-alert__footer">
      <slot name="footer">
      </slot>
      <fm-button v-for="button in buttons" :key="button.value" v-bind="button" class="fm-alert__button"
                 @button-clicked="handleButton">
      </fm-button>
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
            },
            buttons: {
                type: Array,
            },
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

  .fm-alert {
    margin: .5rem auto .75rem;
    padding: .875rem .875rem .875rem .875rem;
    border-radius: .75rem;
    background-color: $white;
    color: $alertBlack;

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
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: .75rem 0 0;
      margin-bottom: -.25rem;
    }

    &__button {
      &:nth-child(n + 2) {
        margin-left: 1rem;
      }
    }
  }
</style>
