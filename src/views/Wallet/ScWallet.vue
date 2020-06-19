<template>
  <fm-screen :toolbarProps="toolbarProps" class="sc-wallet">
    <fm-preview>
      <section>
        <h2>
          Historique des transactions
        </h2>
        <div class="sc-wallet__choice">
          <div class="sc-wallet__choice-box sc-wallet__choice-box--in">
            <ic-back :left-offset="true" class="sc-wallet__choice-arrow" :stroke-width="64">
            </ic-back>
            <div class="sc-wallet__choice-title">
              Rentrées
            </div>
          </div>
          <div class="sc-wallet__choice-box sc-wallet__choice-box--out">
            <ic-back :left-offset="true" class="sc-wallet__choice-arrow sc-wallet__choice-arrow--out"
                     :stroke-width="64">
            </ic-back>
            <div class="sc-wallet__choice-title">
              Dépenses
            </div>
          </div>
        </div>
        <p>
          Ou : <span class="sc-wallet__link">voir l'historique complet</span>
        </p>
      </section>
      <fm-expandable tag="section" title="Transactions planifiées">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae consequuntur delectus deserunt ex
          facilis ipsum, laborum mollitia, nam nulla quisquam reiciendis rem similique soluta ut velit voluptas?
        </p>
        <p>Accusantium asperiores autem consectetur corporis cupiditate
        </p>
        <p>Adipisci alias commodi culpa distinctio doloremque eaque est ex expedita facere harum hic id ipsum iusto
          labore libero necessitatibus nisi, quam quibusdam reprehenderit
        </p>
      </fm-expandable>
      <fm-expandable tag="section" title="Transactions collectives">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam deserunt neque porro veritatis?
        </p>
        <p>Consequatur deleniti dolor expedita harum ipsa ipsam laboriosam nam nihil nostrum quos sapiente, sed
          tempora, ut vitae voluptates voluptatibus voluptatum! Aliquam aperiam dolorem doloremque ea id illum
          praesentium quos veniam.
        </p>
        <p>Animi commodi consectetur cum labore provident, quae quos repudiandae tenetur. Accusamus ad at blanditiis
          consequatur eum laboriosam minus nobis omnis, praesentium, quas quisquam rem sit suscipit tempora vel vero,
          voluptates.
        </p>
        <p>Accusamus adipisci alias amet animi
        </p>
        <p>Aut deserunt ea est repellendus repudiandae rerum saepe
        </p>
      </fm-expandable>
      <section>
        <h2>Compte rendu par catégorie</h2>
        <fm-block>
          <div class="sc-wallet__title">Loyer</div>
        </fm-block>
        <fm-block>
          <div class="sc-wallet__title">Nourriture</div>
        </fm-block>
        <fm-block>
          <div class="sc-wallet__title">Trajets</div>
        </fm-block>
        <fm-block>
          <div class="sc-wallet__title">Assurances</div>
        </fm-block>
      </section>
    </fm-preview>

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
    import FmPreview from "../../components/FmPreview";
    import IcBack from "../../components/icons/IcBack";
    import FmExpandable from "../../components/FmExpandable";
    import FmBlock from "../../components/FmBlock";

    export default {
        name: "ScWallet",
        components: {FmBlock, FmExpandable, IcBack, FmPreview, FmTabBar, FmScreen},
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

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-wallet {
    &__choice {
      display: flex;

      &-box {
        flex: 1;
        border: .25rem solid $in;
        border-radius: .25rem;
        padding: 1.5rem .5rem .5rem;
        margin-bottom: 1rem;
        box-shadow: 0 .125rem .75rem $inShadow;
        color: $in;

        &:first-child {
          margin-right: 1rem;
        }

        &--out {
          border-color: $out;
          box-shadow: 0 .125rem .75rem $outShadow;
          color: $out;
        }
      }

      &-arrow {
        background-color: $in;
        border-radius: 100%;
        line-height: 1;
        padding: .25rem;
        color: $white;
        box-sizing: content-box;
        display: flex;
        align-items: center;
        justify-content: center;

        &--out {
          background-color: $out;
          transform: rotate(180deg);
        }
      }

      &-title {
        font-size: 1.125rem;
        font-weight: $bold;
        margin-top: 1.25rem;
      }
    }

    &__link {
      color: $main;
      font-weight: $medium;
    }


    &__title {
      font-weight: $bold;
    }

    &__sub-title {
      font-size: .875rem;
    }
  }
</style>
