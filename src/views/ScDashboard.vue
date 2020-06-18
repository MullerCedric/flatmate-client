<template>
  <fm-screen :toolbarProps="toolbarProps">
    <p>Prochainement...</p>

    <template #tab>
      <fm-tab-bar>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    //import * as types from "../store/types";

    import FmScreen from "../components/FmScreen";
    import FmTabBar from "../components/FmTabBar";

    export default {
        name: "ScDashboard",
        components: {FmTabBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Dashboard',
                    showAvatar: true,
                    showBell: true,
                    showSettings: true,
                    showBubble: true,
                }
            }
        },
    };
</script>

<style scoped>
</style>
