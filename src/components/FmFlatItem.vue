<template>
  <div class="fm-flat-item" @click="$emit('flat-clicked', flat.id)">
    <fm-avatar class="fm-flat-item__avatar" :user-name="flat.label || 'discu' + flat.id">
    </fm-avatar>
    <div class="fm-flat-item__content">
      {{ label }}
    </div>
  </div>
</template>

<script>
    import FmAvatar from "./FmAvatar";

    export default {
        name: "FmFlatItem",
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

  .fm-flat-item {
    display: flex;
    align-items: center;
    text-align: left;

    &__content {
      flex: 1;
      font-weight: $bold;
    }

    &__avatar {
      margin: .5rem .5rem .5rem 0;
    }
  }
</style>
