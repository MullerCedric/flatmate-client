<template>
  <div :class="['fm-flat-list', {'fm-flat-list--centered': !flats || !flats.length}]">
    <template v-if="!flatsAreLoaded">
      <ic-loading>
      </ic-loading>
      Chargement...
    </template>
    <template v-if="flatsAreLoaded">
      <il-house v-if="!flats || flats.length <= 4" class="fm-flat-list__illu"
                :style="illuWidth" :is-light="hasFlats">
      </il-house>
      <div v-if="!flats.length">
        <p class="fm-flat-list__headline">
          Vous ne faites partie d'aucune colocation
        </p>
        <div class="fm-flat-list__buttons-outer">
          <div class="fm-flat-list__buttons">
            <fm-button size="l" type="secondary" @button-clicked="goTo('flatsSearch')"
                       class="fm-flat-list__button">
              <ic-search class="fm-flat-list__buttons-icon fm-flat-list__buttons-icon--search">
              </ic-search>
              Rejoindre
            </fm-button>
            <fm-button size="l" type="secondary" @button-clicked="goTo('flatsCreate')"
                       class="fm-flat-list__button">
              <ic-plus class="fm-flat-list__buttons-icon fm-flat-list__buttons-icon--plus">
              </ic-plus>
              Créer
            </fm-button>
          </div>
        </div>
      </div>

      <template v-if="flats.length">
        <div class="fm-flat-list__flats">
          <fm-flat-item v-for="flat in flats" :key="flat.id" :flat="flat"
                        @switch-clicked="selectFlat" @flat-clicked="showFlat"
                        :is-selected="flat.id === currFlatId" :show-switch="flats.length > 1">
          </fm-flat-item>
        </div>

        <div class="fm-flat-list__floating-buttons">
          <div class="fm-flat-list__floating-button fm-flat-list__floating-button--main"
               @click="goTo('flatsCreate')">
            <ic-plus>
            </ic-plus>
          </div>
          <div class="fm-flat-list__floating-button"
               @click="goTo('flatsSearch')">
            <ic-search>
            </ic-search>
          </div>
        </div>

        <div v-if="flats.length === 1" class="fm-flat-list__side-note">
          <span class="fm-flat-list__side-note--title">Le saviez-vous ?</span> Vous pouvez switcher entre plusieurs
          colocations&nbsp;! Ainsi, si vous êtes fréquemment à
          plusieurs endroits, vous pouvez utiliser le.flatmate pour chaque endroit afin de rester au courant de tout&nbsp;!
        </div>
      </template>
    </template>
  </div>
</template>

<script>
    import * as types from "../store/types";

    import FmFlatItem from "./FmFlatItem";
    import IlHouse from "./illustrations/IlHouse";
    import FmButton from "./FmButton";
    import IcPlus from "./icons/IcPlus";
    import IcSearch from "./icons/IcSearch";
    import IcLoading from "./icons/IcLoading";

    export default {
        name: "FmFlatList",
        components: {IcLoading, IcSearch, IcPlus, FmButton, IlHouse, FmFlatItem},
        data() {
            return {
                flatsAreLoaded: false,
            };
        },
        computed: {
            flats() {
                return this.$store.getters[types.GET_FLATS];
            },
            currFlat() {
                return this.$store.getters[types.GET_FLAT];
            },
            currFlatId() {
                return this.currFlat.id;
            },
            illuWidth() {
                if (!this.flats || !this.flats.length) return;
                return 'width: 20%;';
            },
            hasFlats() {
                return !!(this.flats.length >= 1 && this.currFlatId);
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_FLATS).then(() => this.flatsAreLoaded = true);
        },
        methods: {
            showFlat(flatId) {
                if (this.$route.name === 'flatsShow' && this.$route.params.id && this.$route.params.id === flatId) {
                    return;
                }
                this.$store.commit(types.CLOSE_SIDE_MENU);
                this.$router.push({name: 'flatsShow', params: {id: flatId}});
            },
            selectFlat(flatId) {
                if (flatId === this.currFlatId) return;
                this.flatsAreLoaded = false;
                this.$store.dispatch(types.SWITCH_FLAT, flatId)
                    .then(() => {
                        this.$store.dispatch(types.FETCH_FLATS).then(() => this.flatsAreLoaded = true);
                    });
            },
            goTo(routeName) {
                this.$store.commit(types.CLOSE_SIDE_MENU);
                this.$router.push({name: routeName});
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-flat-list {
    text-align: center;

    &--centered {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 0 1.5rem;
    }

    &__illu {
      width: 55%;
      min-width: 4rem;
      max-width: 15rem;
    }

    &__headline {
      margin: 1.25rem 0;
      font-size: 1.25rem;
    }

    &__buttons {
      display: flex;
      justify-content: center;
      flex-direction: column;

      &-outer {
        display: inline-block;
      }

      &-icon {
        margin-right: .625rem;
        flex-shrink: 0;

        &--plus {
          margin: 0 .25rem 0 -.25rem;
        }
      }
    }

    &__button {
      margin-top: 1rem;
    }

    &__flats {
      margin-top: 1.5rem;
    }

    &__floating-buttons {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    &__floating-button {
      padding: .5rem;
      line-height: 1;
      background-color: $darkGrey;
      border-radius: 100%;
      color: $white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: content-box;
      height: 24px;
      width: 24px;

      &:nth-child(n+2) {
        margin-top: .75rem;
      }

      &--main {
        background-color: $black;
      }
    }

    &__side-note {
      font-size: .875rem;
      margin: 2rem 1.5rem 0;
      text-align: left;

      &--title {
        font-weight: $medium;
      }
    }
  }
</style>
