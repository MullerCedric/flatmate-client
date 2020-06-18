<template>
  <fm-screen :toolbarProps="toolbarProps">
    <template v-if="!flatsAreLoaded">
      <ic-loading>
      </ic-loading>
      Chargement...
    </template>
    <template v-if="flatsAreLoaded">
      <section v-if="nbrFlatmates <= 2">
        <h2>
          Clé de la colocation
        </h2>
        <div class="sc-dashboard__side-note">
          Vous {{ nbrFlatmates === 1 ? 'êtes seul ' : 'n\'êtes que deux ' }} dans votre colocation ! Donnez la clé
          ci-dessous à vos colocataires pour qu'ils puissent rejoindre la colocation sur le.flatmate&nbsp;!
        </div>
        <div class="sc-dashboard__key">
          <ic-key class="sc-dashboard__key-icon">
          </ic-key>
          <div class="sc-dashboard__key-val">
            {{ currFlat.key }}
          </div>
        </div>
      </section>
    </template>

    <section>
      <h2>
        Événements
      </h2>
      <p>Aucun événement n'est prévu prochainement...</p>
    </section>

    <template #tab>
      <fm-tab-bar>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../store/types";

    import FmScreen from "../components/FmScreen";
    import FmTabBar from "../components/FmTabBar";
    import IcLoading from "../components/icons/IcLoading";
    import IcKey from "../components/icons/IcKey";

    export default {
        name: "ScDashboard",
        components: {IcKey, IcLoading, FmTabBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Dashboard',
                    showAvatar: true,
                    showBell: true,
                    showSettings: true,
                    showBubble: true,
                },
                flatsAreLoaded: false,
            };
        },
        computed: {
            currFlat() {
                return this.$store.getters[types.GET_FLAT];
            },
            currFlatId() {
                return this.currFlat.id;
            },
            nbrFlatmates() {
                return this.currFlat.participants.length;
            },
            hasFlats() {
                return !!(this.currFlatId);
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_FLATS).then(() => this.flatsAreLoaded = true);
        },
    };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .sc-dashboard {
    &__label {
      font-size: 1.25rem;
      font-weight: $bold;
      color: $black;
      margin: 0 0 .125rem;
    }

    &__key {
      display: flex;
      align-items: center;
      justify-content: center;

      &-icon {
        flex-shrink: 0;
        margin-right: .5rem;
      }

      &-val {
        font-size: 1.125rem;
        font-weight: $medium;
        letter-spacing: .25rem;
        background-color: $white;
        display: inline-block;
        padding: .125rem .5rem .125rem .75rem;
        border-radius: .25rem;
        user-select: text;
      }
    }

    &__side-note {
      font-size: .875rem;
      margin: 0 0 .75rem;
      line-height: 1.25;
    }
  }
</style>
