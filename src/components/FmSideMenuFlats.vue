<template>
  <div class="fm-side-menu-flats">
    <div v-for="flat in flats" :key="flat.id"
         :class="['fm-side-menu-flats__flat', { 'fm-side-menu-flats__flat--current': flat.id === currFlatId }]">
      <div class="fm-side-menu-flats__avatar"></div>
      <div class="fm-side-menu-flats__flat-content">
        {{ flat.name }}
      </div>
    </div>
    <div class="fm-side-menu-flats__floating-buttons">
      <div class="fm-side-menu-flats__floating-button fm-side-menu-flats__floating-button--main">
        <ic-plus></ic-plus>
      </div>
      <div class="fm-side-menu-flats__floating-button">
        <ic-search></ic-search>
      </div>
    </div>
  </div>
</template>

<script>
    import * as types from '../store/types';
    import IcPlus from "./icons/IcPlus";
    import IcSearch from "./icons/IcSearch";

    export default {
        name: "FmSideMenuFlats",
        components: {IcSearch, IcPlus},
        computed: {
            flats() {
                return this.$store.getters[types.GET_FLATS];
            },
            currFlatId() {
                return this.$store.getters[types.GET_FLAT].id;
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_FLATS);
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu-flats {
    &__flat {
      padding: .5rem 1.5rem;
      margin-bottom: .5rem;
      display: flex;
      align-items: center;
      position: relative;

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

      &-content {
        flex: 1;
        font-weight: $bold;
      }

      &--current {
        background-color: $lightMain;

        &:after {
          background-color: $main;
        }
      }
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

    &__floating-buttons {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    &__floating-button {
      padding: .5rem;
      line-height: 1;
      background-color: $darkGrey;
      border-radius: 100%;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: content-box;
      height: 24px;
      width: 24px;

      &:nth-child(n+2) {
        margin-top: .75rem;
      }

      &--main {
        background-color: $black;
      }
    }
  }
</style>
