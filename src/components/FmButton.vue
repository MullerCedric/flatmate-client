<template>
  <component :is="tag"
             @click="$emit('button-clicked', value)"
             :class="['fm-button', 'fm-button--' + type, 'fm-button--' + size]">
    <slot>
    </slot>
    {{ label }}
  </component>
</template>

<script>
    export default {
        name: "FmButton",
        props: {
            value: {
                type: String,
                default: 'button',
            },
            tag: {
                type: String,
                default: 'div',
            },
            type: {
                type: String,
                default: 'none',
                validator: (val) => {
                    return [
                        'none', 'primary', 'secondary', 'tertiary'
                    ].indexOf(val) !== -1;
                },
            },
            label: {
                type: String,
            },
            size: {
                type: String,
                default: 'm',
                validator: (val) => {
                    return [
                        'xs', 's', 'm', 'l', 'xl'
                    ].indexOf(val) !== -1;
                },
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-button {
    padding: .25rem .5rem;
    border-radius: .5rem;
    font-weight: $medium;
    display: flex;
    align-items: center;
    justify-content: center;

    &--primary, &--secondary {
      padding: .25rem .75rem;
      color: $white;
    }

    &--primary {
      background-color: $black;
    }

    &--secondary {
      background-color: $darkGrey;
    }

    &--s {
      padding: .125rem .25rem;
      border-radius: .375rem;
    }

    &--l {
      padding: .375rem .9375rem .375rem .75rem;
      border-radius: .625rem;
    }

    &--xl {
      font-size: 1.125em;
      padding: .5rem 1.25rem .5rem 1rem;
      border-radius: .75rem;
    }
  }
</style>
