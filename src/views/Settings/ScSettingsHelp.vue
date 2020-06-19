<template>
  <fm-screen :toolbarProps="toolbarProps">
      <div class="sc-settings__link">
        <div class="sc-settings__text">
          <div class="sc-settings__name">
            FAQ
          </div>
        </div>
        <ic-back class="sc-settings__forward">
        </ic-back>
      </div>
      <div class="sc-settings__link">
        <div class="sc-settings__text">
          <div class="sc-settings__name">
            Mentions légales
          </div>
        </div>
        <ic-back class="sc-settings__forward">
        </ic-back>
      </div>
      <div class="sc-settings__link">
        <div class="sc-settings__text">
          <div class="sc-settings__name">
            Nous contacter
          </div>
        </div>
        <ic-back class="sc-settings__forward">
        </ic-back>
      </div>
  </fm-screen>
</template>

<script>
    // import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import IcBack from "../../components/icons/IcBack";

    export default {
        name: "ScSettingsHelp",
        components: {IcBack, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Aide',
                    showBack: true,
                }
            }
        },
        methods: {},
    };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-settings {
    &__link {
      display: flex;
      align-items: flex-start;
      padding: .75rem .25rem;

      &:nth-child(n+2) {
        margin-top: .5rem;
      }

      &:nth-last-child(n+2) {
        border-bottom: .0625rem solid $lightGrey;
      }
    }

    &__icon, &__forward {
      flex-shrink: 0;
    }

    &__icon {
      margin-right: .75rem;
    }

    &__text {
      flex: 1;
    }

    &__desc {
      font-size: .875rem;
      line-height: 1.25;
    }

    &__forward {
      align-self: center;
      transform: rotate(180deg) scale(.75);
    }
  }
</style>
