<template>
  <div @click.stop="$emit('flat-clicked', flat.id)"
       :class="['fm-flat-item', {'fm-flat-item--current': isSelected}, {'fm-flat-item--alone': !showSwitch}]">
    <fm-avatar class="fm-flat-item__avatar" :user-name="label" :img-url="flat.avatar">
    </fm-avatar>
    <div class="fm-flat-item__content">
      {{ label }}
    </div>
    <div v-if="showSwitch" @click.stop="$emit('switch-clicked', flat.id)"
         :class="['fm-flat-item__switch', {'fm-flat-item__switch--current': isSelected}]">
      <ic-open>
      </ic-open>
    </div>
  </div>
</template>

<script>
    import FmAvatar from "./FmAvatar";
    import IcOpen from "./icons/IcOpen";

    export default {
        name: "FmFlatItem",
        components: {IcOpen, FmAvatar},
        props: {
            flat: {
                type: Object,
                required: true,
            },
            isSelected: {
                type: Boolean,
                default: false,
            },
            showSwitch: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            label() {
                return this.flat.label || this.flat.participants.map(el => el.name).join(", ");
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-flat-item {
    display: flex;
    align-items: center;
    text-align: left;
    position: relative;
    padding: .25rem 0 .25rem 1.5rem;
    margin-bottom: .5rem;

    &__content {
      flex: 1;
      font-weight: $bold;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__avatar {
      margin: .5rem .5rem .5rem 0;
      flex-shrink: 0;
    }

    &__switch {
      flex-shrink: 0;
      padding: .75rem 1.5rem .75rem .75rem;
      line-height: 1;
      opacity: .9;
      transform: scale(.875);

      &--current {
        opacity: .6;
      }
    }

    &--alone {
      padding-right: 1.5rem;

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: .4375rem;
        border-radius: .4375rem 0 0 .4375rem;
        background-color: transparent;
      }
    }

    &--current {
      background-color: $lightMain;

      &:after {
        background-color: $main;
      }
    }
  }
</style>
