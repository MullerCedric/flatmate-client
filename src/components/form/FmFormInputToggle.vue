<template>
  <div :class="[
      'fm-fi-toggle',
      { 'fm-fi-toggle--active': isActive,
      'fm-fi-toggle--disabled': disabled }
      ]" @click="changeValue">
    <div :class="[
        'fm-fi-toggle__button',
        { 'fm-fi-toggle__button--active' : isActive,
        'fm-fi-toggle__button--disabled': disabled }
        ]"></div>
  </div>
</template>

<script>
    export default {
        name: "FmFormInputToggle",
        props: {
            initialState: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                isActive: true,
            }
        },
        mounted() {
            if (typeof this.initialState === 'boolean') {
                this.isActive = this.initialState;
                this.$emit('change-value', this.isActive);
            }
        },
        methods: {
            changeValue() {
                if (this.disabled) return;
                this.isActive = !this.isActive;
                this.$emit('change-value', this.isActive);
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-fi-toggle {
    background-color: $grey;
    border: .0625rem solid $grey;
    border-radius: 1rem;
    height: 1.75rem;
    width: 3.125rem;
    position: relative;
    margin: -.25rem 0 .5rem;

    &--active {
      background-color: $main;
      border-color: $main;
    }

    &--disabled {
      background-color: $black;
      border-color: $black;
    }

    &__button {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 1rem;
      background-color: $white;
      position: absolute;
      left: .125rem;
      top: .0625rem;
      transition: left .2s ease-in-out;

      &--active {
        left: calc(100% - 1.625rem);
      }

      &--disabled {
        background-color: $lightGrey;
      }
    }
  }
</style>
