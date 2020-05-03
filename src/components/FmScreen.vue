<template>
  <div class="fm-screen">
    <fm-toolbar v-bind="toolbarProps" :key="$route.path"></fm-toolbar>
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
        data() {
            return {
                toolbarProps: {
                    title: 'Portefeuille',
                    type: 'wallet',
                    showSearch: true,
                    showMore: true,
                }
            }
        }
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
