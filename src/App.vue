<template>
  <div id="app">
    <ion-app>
      <router-view :key="$route.path" :class="['fm-view', {'fm-view--aside': sideMenuIsVisible}]">
      </router-view>
      <fm-loading-screen>
      </fm-loading-screen>
      <fm-side-menu v-if="isConnected && hasFlat && echoIsInit" :key="viewingFlat"
                    :class="['fm-side-menu', {'fm-side-menu--visible': sideMenuIsVisible}]">
      </fm-side-menu>
    </ion-app>
  </div>
</template>

<script>
    import * as types from './store/types';

    import FmSideMenu from "./components/FmSideMenu";
    import FmLoadingScreen from "./components/FmLoadingScreen";

    export default {
        name: "app",
        components: {FmLoadingScreen, FmSideMenu},
        computed: {
            sideMenuIsVisible() {
                return this.$store.getters[types.GET_SIDE_MENU_STATE] || false;
            },
            currUser() {
                return this.$store.getters[types.GET_USER]
            },
            isConnected() {
                return !!this.currUser.api_token;
            },
            viewingFlat() {
                return this.currUser.viewingFlat;
            },
            hasFlat() {
                return !!this.viewingFlat;
            },
            echoIsInit() {
                return this.$store.getters[types.GET_ECHO] || false;
            },
        }
    };
</script>

<style lang="scss">
  @import "assets/scss/_settings.scss";
  @import "assets/scss/_tools.scss";
  @import "assets/scss/_reset.scss";
  @import "assets/scss/_base.scss";

  html,
  body {
    height: 100%;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
  }

  body {
    font-weight: $regular;
    font-style: normal;
    line-height: 1.5;
    color: $black;
    position: relative;
  }

  body, body * {
    overflow-wrap: break-word;
    box-sizing: border-box;
    max-width: 100%;

    &:focus {
      outline: none;
    }
  }

  [id="app"] {
    height: 100%;
    background-color: $lighterGrey;
    font-family: $mainFont;
  }

  .fm-view {
    overflow-x: hidden;
    transform: translateX(0);
    transition: transform .3s ease-in-out;

    &--aside {
      transform: translateX(-89%);
    }
  }

  .fm-side-menu {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 87%;
    z-index: z('side-menu');
    transform: translateX(100%);
    transition: transform .3s ease-in-out;

    &--visible {
      transform: translateX(0);
    }
  }

  ion-navbar.toolbar.toolbar-ios.statusbar-padding,
  ion-navbar.toolbar-ios ion-title.title-ios,
  ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
  ion-toolbar.toolbar-ios ion-title.title-ios {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
</style>
