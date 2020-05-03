<template>
  <ion-slide class="slide-budget">
    <div class="sc-wallet__budget">
      <fm-amount-display :amount="800.50" currency="€"></fm-amount-display>
      <div class="desc">
        Budget personnel
      </div>
      <fm-expandable title="Dépenses prévues">
      </fm-expandable>
      <section>
        <h2>
          Historique des dépenses
        </h2>
        <fm-block>
          <div>+30,00€</div>
          <div>Britney vous a payé - 19 janvier</div>
        </fm-block>
        <fm-block>
          <div>-10,00€</div>
          <div>Vous avez payé Tessa - 19 janvier</div>
        </fm-block>
      </section>
    </div>
  </ion-slide>
</template>

<script>
    import FmAmountDisplay from "../../components/FmAmountDisplay";
    import FmExpandable from "../../components/FmExpandable";
    import FmBlock from "../../components/FmBlock";

    export default {
        name: "ScWalletBudget",
        components: {FmBlock, FmExpandable, FmAmountDisplay},
    };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings.scss";

  .slide-budget {
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
</style>
