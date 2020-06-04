<template>
  <div class="fm-side-menu-flat">
    <fm-avatar class="fm-side-menu-flat__avatar" :user-name="flat.label || 'discu' + flat.id">
    </fm-avatar>
    <div class="fm-side-menu-flat__content">
      {{ label }}
    </div>
  </div>
</template>

<script>
    import FmAvatar from "./FmAvatar";
    export default {
        name: "FmSideMenuFlat",
        components: {FmAvatar},
        props: {
            flat: {
                type: Object,
                required: true,
            }
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

  .fm-side-menu-flat {
    display: flex;
    align-items: center;

    &__content {
      flex: 1;
      font-weight: $bold;
    }

    &__avatar {
      margin: .5rem .5rem .5rem 0;
    }
  }
</style>
