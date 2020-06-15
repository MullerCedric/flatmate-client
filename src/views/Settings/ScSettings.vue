<template>
  <fm-screen :toolbarProps="toolbarProps">
    <router-link tag="div" :to="{ name: 'settingsProfile'}" class="sc-settings__link">
      <ic-person class="sc-settings__icon">
      </ic-person>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Profil
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </router-link>
    <router-link tag="div" :to="{ name: 'settingsNotifications'}" class="sc-settings__link">
      <ic-bell class="sc-settings__icon">
      </ic-bell>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Notifications
        </div>
        <div class="sc-settings__desc">
          Préférences pour les notifications push
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </router-link>
    <router-link tag="div" :to="{ name: 'flats'}" class="sc-settings__link">
      <ic-key class="sc-settings__icon">
      </ic-key>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Colocations
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </router-link>
    <div class="sc-settings__link">
      <ic-database class="sc-settings__icon">
      </ic-database>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Données et stockage
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </div>
    <router-link tag="div" :to="{ name: 'settingsLegalNotice'}" class="sc-settings__link">
      <ic-help class="sc-settings__icon">
      </ic-help>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Aide
        </div>
        <div class="sc-settings__desc">
          Nous contacter, politique de confidentialité, mentions légales
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </router-link>
    <div @click="disconnect" class="sc-settings__link">
      <ic-log-out class="sc-settings__icon">
      </ic-log-out>
      <div class="sc-settings__text">
        <div class="sc-settings__name">
          Se déconnecter
        </div>
      </div>
      <ic-back class="sc-settings__forward">
      </ic-back>
    </div>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import IcPerson from "../../components/icons/IcPerson";
    import IcBell from "../../components/icons/IcBell";
    import IcBack from "../../components/icons/IcBack";
    import IcLogOut from "../../components/icons/IcLogOut";
    import IcHelp from "../../components/icons/IcHelp";
    import IcDatabase from "../../components/icons/IcDatabase";
    import IcKey from "../../components/icons/IcKey";

    export default {
        name: "ScSettings",
        components: {IcKey, IcDatabase, IcHelp, IcLogOut, IcBack, IcBell, IcPerson, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Paramètres',
                    showBack: true,
                }
            }
        },
        methods: {
            disconnect() {
                this.$store.dispatch(types.DISCONNECT).then(() => {
                    this.$router.push({name: 'log-in'});
                }).catch(e => {
                    window.console.log(e);
                });
            }
        },
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
