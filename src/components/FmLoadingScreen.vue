<template>
  <transition name="loaded">
    <div v-if="showLoadingScreen" class="fm-loading-screen">
      <fm-logo>
      </fm-logo>
      <div>
        <ic-loading>
        </ic-loading>
        Chargement...
      </div>
    </div>
  </transition>
</template>

<script>
    import * as types from "../store/types";

    import FmLogo from "./FmLogo";
    import IcLoading from "./icons/IcLoading";

    export default {
        name: "FmLoadingScreen",
        components: {IcLoading, FmLogo},
        computed: {
            showLoadingScreen() {
                return this.$store.getters[types.GET_LOADING_SCREEN_STATE] || false;
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";
  @import "../assets/scss/tools";

  .fm-loading-screen {
    position: absolute;
    z-index: z('loading-screen');
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $lighterGrey;
  }

  .loaded-enter-active, .loaded-leave-active {
    transition: opacity .4s 3s;
  }

  .loaded-leave-to {
    opacity: 0;
  }
</style>
