<template>
  <div class="fm-side-menu-flat">
    <div class="fm-side-menu-flat__avatar"></div>
    <div class="fm-side-menu-flat__content">
      {{ label }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "FmSideMenuFlat",
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
      width: 2.5em;
      height: 2.5em;
      overflow: hidden;
      text-align: center;
      padding: 0;
      margin: .5rem .5rem .5rem 0;
      border-radius: 100%;
      box-shadow: 0 0 .15em $shadow;
      background-color: $grey;

      & img {
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: none;
      }
    }
  }
</style>
