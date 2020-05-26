<template>
  <div class="fm-screen" @click="closeMenu">
    <fm-toolbar v-bind="toolbarProps"></fm-toolbar>
    <fm-screen-content class="fm-screen__content">
      <slot></slot>
    </fm-screen-content>
    <slot name="tab">
    </slot>
  </div>
</template>

<script>
    import * as types from "../store/types";

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
        methods: {
            closeMenu() {
                if (this.$store.state.sideMenuIsVisible) {
                    this.$store.commit(types.CLOSE_SIDE_MENU);
                }
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
