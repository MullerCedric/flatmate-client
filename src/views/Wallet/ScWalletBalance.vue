<template>
  <ion-slide class="slide-balance">
    <div class="sc-wallet__balance">
      <fm-amount-display :amount="-3.50" currency="€"></fm-amount-display>
      <div class="desc">
        Dépenses collectives
      </div>
      <div class="balance-list">
        <fm-block>
          <fm-amount-display :amount="-6" currency="€" :sm="true"></fm-amount-display>
          <div>Britney</div>
        </fm-block>
        <fm-block>
          <fm-amount-display :amount="-10" currency="€" :sm="true"></fm-amount-display>
          <div>Lindsey</div>
        </fm-block>
        <fm-block>
          <fm-amount-display :amount="12.5" currency="€" :sm="true"></fm-amount-display>
          <div>Tessa</div>
        </fm-block>
      </div>
    </div>
  </ion-slide>
</template>

<script>
    import FmAmountDisplay from "../../components/FmAmountDisplay";
    import FmBlock from "../../components/FmBlock";

    export default {
        name: "ScWalletBalance",
        components: {FmBlock, FmAmountDisplay}
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings.scss";

  .slide-balance {
    display: block;
    overflow-y: auto;
    text-align: left;
  }

  .desc {
    color: $darkGrey;
    font-size: .875rem;
    margin-top: -.33rem;
    text-align: center;
  }

  .balance-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem .5rem;
    margin-top: 1.5rem;

    & > * {
      margin: 0 .5rem;
    }
  }
</style>
