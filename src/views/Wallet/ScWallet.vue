<template>
  <fm-screen :toolbarProps="toolbarProps">
    <sc-wallet-slide></sc-wallet-slide>

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
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmTabBar from "../../components/FmTabBar";
    import ScWalletSlide from "./ScWalletSlide";

    export default {
        name: "ScWallet",
        components: {FmTabBar, ScWalletSlide, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Portefeuille',
                    type: 'wallet',
                    showSearch: true,
                    showMore: true,
                },
            }
        },
        mounted() {
            this.$store.dispatch(types.HYDRATE_APP);
        },
    };
</script>

<style scoped>
</style>
