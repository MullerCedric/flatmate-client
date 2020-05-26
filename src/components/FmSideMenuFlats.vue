<template>
  <div class="fm-side-menu-flats">
    <fm-side-menu-flat v-for="flat in flats" :key="flat.id" :flat="flat"
                       :class="['fm-side-menu-flats__flat', { 'fm-side-menu-flats__flat--current': flat.id === currFlatId }]">
    </fm-side-menu-flat>
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
    import FmSideMenuFlat from "./FmSideMenuFlat";

    export default {
        name: "FmSideMenuFlats",
        components: {FmSideMenuFlat, IcSearch, IcPlus},
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

      &--current {
        background-color: $lightMain;

        &:after {
          background-color: $main;
        }
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
