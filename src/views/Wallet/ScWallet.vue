<template>
  <fm-screen :toolbarProps="toolbarProps">
    <sc-wallet-slide></sc-wallet-slide>

    <template #create-menu>
      <p>
        Liens de créations
      </p>
      <p>
        Pour le portefeuille
      </p>
    </template>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";
    import ScWalletSlide from "./ScWalletSlide";

    export default {
        name: "ScWallet",
        components: {ScWalletSlide, FmScreen},
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
    };
</script>

<style scoped>
</style>
