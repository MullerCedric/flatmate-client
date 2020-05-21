<template>
  <div class="fm-side-menu">
    <header class="fm-side-menu__header">
      <div class="fm-side-menu__header-left">
        <div @click="handleBackButton">
          <ic-back>
          </ic-back>
        </div>
        <div>{{ views[view].title }}</div>
      </div>
      <div class="fm-side-menu__header-right">
        <div v-if="view === 0" @click="view = 1">
          <ic-open>
          </ic-open>
        </div>
      </div>
    </header>
    <main class="fm-side-menu__main">
      <component :is="views[view].screen">
      </component>
    </main>
  </div>
</template>

<script>
    import IcBack from "./icons/IcBack";
    import IcOpen from "./icons/IcOpen";
    import FmSideMenuDiscussions from "./FmSideMenuDiscussions";
    import FmSideMenuFlats from "./FmSideMenuFlats";

    export default {
        name: "FmSideMenu",
        components: {FmSideMenuFlats, FmSideMenuDiscussions, IcOpen, IcBack},
        data() {
            return {
                views: [
                    {
                        title: 'Discussions',
                        screen: 'fm-side-menu-discussions',
                    },
                    {
                        title: 'Colocations',
                        screen: 'fm-side-menu-flats',
                    },
                ],
                view: 0
            };
        },
        methods: {
            handleBackButton() {
                if (this.view === 0) {
                    this.$store.state.sideMenuIsVisible = false;
                } else {
                    this.view = 0;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu {
    background-color: $white;
    padding: .5rem 0 1.5rem;
    display: flex;
    flex-direction: column;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 1;
      margin-bottom: .5rem;
      padding: 0 1.5rem;

      &-left, &-right {
        display: flex;
        align-items: center;

        & > * {
          padding: 1.0625rem .25rem;
        }
      }

      &-left {
        & > :first-child {
          margin-left: 0;
          padding-left: 0;
        }
      }

      &-right {
        justify-content: flex-end;

        & > :last-child {
          margin-right: 0;
          padding-right: 0;
        }
      }
    }

    &__main {
      flex: 1;
      overflow-y: auto;
    }
  }
</style>
