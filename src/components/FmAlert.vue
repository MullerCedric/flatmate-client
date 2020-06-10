<template>
  <div :class="['fm-alert', 'fm-alert--' + type]">
    <slot></slot>
    <div v-if="this.$slots.footer || (buttons && buttons.length)" class="fm-alert__footer">
      <slot name="footer"></slot>
      <component v-for="button in buttons" :key="button.value" :is="button.tag || 'div'"
                 @click="$emit('button-click', button.value)"
                 :class="['fm-alert__button', 'fm-alert__button--' + button.type]">
        {{ button.label }}
      </component>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FmAlert",
        props: {
            type: {
                type: String,
                default: 'none',
            },
            buttons: {
                type: Array,
            },
        },
        computed: {},
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

    &--none .fm-alert__button {
      &--primary {
        background-color: $black;
        color: $white;
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
      padding: .25rem .5rem;
      border-radius: .5rem;
      font-weight: $medium;

      &:nth-child(n + 2) {
        margin-left: 1rem;
      }

      &--primary {
        padding: .25rem .75rem;
        background-color: $white;
      }
    }
  }
</style>
