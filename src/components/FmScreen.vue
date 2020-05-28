<template>
  <div class="fm-screen" @click="closeMenu">
    <fm-toolbar v-bind="toolbarProps" @back-clicked="handleBack" @avatar-clicked="handleAvatar" @title-clicked="handleTitle"
                @search-clicked="handleSearch" @bell-clicked="handleBell" @settings-clicked="handleSettings" @more-clicked="handleMore">
    </fm-toolbar>
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
            },
            handleBack() {
                this.$emit('back-clicked');
            },
            handleAvatar() {
                this.$emit('avatar-clicked');
            },
            handleTitle() {
                this.$emit('title-clicked');
            },
            handleSearch() {
                this.$emit('search-clicked');
            },
            handleBell() {
                this.$emit('bell-clicked');
            },
            handleSettings() {
                this.$emit('settings-clicked');
            },
            handleMore() {
                this.$emit('more-clicked');
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
