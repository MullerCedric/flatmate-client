<template>
  <div class="fm-screen">
    <fm-toolbar v-bind="toolbarProps"></fm-toolbar>
    <fm-screen-content class="fm-screen__content">
      <slot></slot>
    </fm-screen-content>
    <fm-tab-bar>
      <slot name="create-menu"></slot>
    </fm-tab-bar>
  </div>
</template>

<script>
    import FmScreenContent from "./FmScreenContent";
    import FmTabBar from "./FmTabBar";
    import FmToolbar from "./FmToolbar";

    export default {
        name: "FmScreen",
        components: {FmToolbar, FmTabBar, FmScreenContent},
        props: {
            toolbarProps: {
                type: Object,
            }
        },
    }
</script>

<style scoped>
  .fm-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .fm-screen__content {
    flex: 1;
  }
</style>
