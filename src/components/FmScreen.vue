<template>
  <div class="fm-screen">
    <fm-toolbar v-bind="toolbarProps"></fm-toolbar>
    <fm-screen-content class="fm-screen__content">
      <slot></slot>
    </fm-screen-content>
    <slot name="tab">
    </slot>
  </div>
</template>

<script>
    import FmScreenContent from "./FmScreenContent";
    import FmToolbar from "./FmToolbar";

    export default {
        name: "FmScreen",
        components: {FmToolbar, FmScreenContent},
        props: {
            toolbarProps: {
                type: Object,
            },
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
