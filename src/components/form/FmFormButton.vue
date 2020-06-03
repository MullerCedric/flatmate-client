<template>
  <button :class="['fm-form-button', state ? 'fm-form-button--' + state : '']" :disabled="disabled"
          @click="$emit('click-button')">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "FmFormButton",
        props: {
            state: {
                type: String,
                validator: (val) => {
                    return [
                        'primary',
                        'secondary',
                        'tertiary',
                    ].indexOf(val) !== -1;
                },
            },
            disabled: {
                type: Boolean,
                default: false,
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-form-button {
    width: 100%;
    background-color: $black;
    color: white;
    box-shadow: none;
    border: none;
    border-radius: .625rem;
    padding: .5rem .5rem;
    font-weight: $medium;
    font-size: 1rem;
    line-height: 1.5;
    margin: 3rem 0 .5rem;

    &--primary {
      background-color: $main;
    }

    &:disabled {
      background-color: $darkGrey;
    }
  }

</style>
