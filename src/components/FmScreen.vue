<template>
  <div class="fm-screen" @click="handleScreen">
    <fm-toolbar v-if="toolbarProps" v-bind="toolbarProps" @back-clicked="handleBack" @avatar-clicked="handleAvatar"
                @title-clicked="handleTitle" @search-clicked="handleSearch"
                @bell-clicked="handleBell" @settings-clicked="handleSettings" @more-clicked="handleMore">
    </fm-toolbar>
    <fm-screen-content :class="['fm-screen__content', contentPos ? 'fm-screen__content--' + contentPos : '']">
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
            contentPos: {
                type: String,
                default: 'flex-start',
                validator: (val) => {
                    return [
                        'flex-start',
                        'flex-end',
                        'center'
                    ].indexOf(val) !== -1;
                }
            },
        },
        methods: {
            handleScreen() {
                this.closeMenu();
                this.$emit('screen-clicked');
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
            closeMenu() {
                if (this.$store.state.sideMenuIsVisible) {
                    this.$store.commit(types.CLOSE_SIDE_MENU);
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
  .fm-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .fm-screen__content {
    flex: 1;
    display: flex;
    flex-direction: column;

    &--flex-start {
      justify-content: flex-start;
    }

    &--flex-end {
      justify-content: flex-end;
    }

    &--center {
      justify-content: center;
    }
  }
</style>
