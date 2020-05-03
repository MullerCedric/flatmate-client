<template>
  <ion-slides pager="true" class="sc-wallet__slide">
    <sc-wallet-budget></sc-wallet-budget>
    <sc-wallet-balance></sc-wallet-balance>
  </ion-slides>
</template>

<script>
    import ScWalletBudget from "./ScWalletBudget";
    import ScWalletBalance from "./ScWalletBalance";

    export default {
        name: "ScWalletSlide",
        components: {ScWalletBalance, ScWalletBudget},
    }
</script>

<style lang="scss">
  @import "../../assets/scss/_settings.scss";

  .sc-wallet__slide {
    height: 100%;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    background-color: $white;
    padding: .15em .5em;
    border-radius: 1em;
    box-shadow: 0 0 .15em $shadow;
  }

  .swiper-pagination-bullet {
    background-color: $grey;
    opacity: 1;
    border-radius: 8px;
    transition: width .3s ease-in-out, background-color .2s ease-out;

    &-active {
      background-color: $main;
      width: 20px;
    }
  }
</style>
