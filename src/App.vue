<template>
  <div id="app">
    <ion-app>
      <router-view :key="$route.path"></router-view>
    </ion-app>
  </div>
</template>

<script>
    export default {
        name: "app"
    };
</script>

<style lang="scss">
  @import "assets/scss/_fonts.scss";
  @import "assets/scss/_settings.scss";
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
    font-family: $mainFont;
    font-weight: 400;
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
  }

  ion-navbar.toolbar.toolbar-ios.statusbar-padding,
  ion-navbar.toolbar-ios ion-title.title-ios,
  ion-toolbar.toolbar.toolbar-ios.statusbar-padding,
  ion-toolbar.toolbar-ios ion-title.title-ios {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
  }
</style>
