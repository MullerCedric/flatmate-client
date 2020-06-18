<template>
  <fm-screen :toolbarProps="toolbarProps">
    <p>Prochainement...</p>

    <template #tab>
      <fm-tab-bar>
        <p>
          Liens de créations
        </p>
        <p>
          Pour le portefeuille
        </p>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    //import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmTabBar from "../../components/FmTabBar";

    export default {
        name: "ScWallet",
        components: {FmTabBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Portefeuille',
                    showAvatar: true,
                    showSearch: true,
                    showMore: true,
                    showBubble: true,
                },
            }
        },
    };
</script>

<style scoped>
</style>
