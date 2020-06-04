<template>
  <div v-if="showToolbar" class="fm-toolbar">
    <div class="fm-toolbar__left">
      <div v-if="showBack" class="fm-toolbar__back" @click.stop="handleBack">
        <ic-back></ic-back>
      </div>
      <div @click.stop="handleAvatar">
        <fm-avatar v-if="showAvatar" class="fm-toolbar__avatar" :user-name="userName">
        </fm-avatar>
      </div>
      <h1 v-if="showTitle" class="fm-toolbar__title" @click.stop="handleTitle">
        {{ title }}
      </h1>
    </div>
    <div class="fm-toolbar__right">
      <div v-if="showSearch" class="fm-toolbar__search" @click.stop="handleSearch">
        <ic-search></ic-search>
      </div>
      <div v-if="showBell" class="fm-toolbar__bell" @click.stop="handleBell">
        <ic-bell></ic-bell>
      </div>
      <div v-if="showSettings" class="fm-toolbar__settings" @click.stop="handleSettings">
        <ic-settings></ic-settings>
      </div>
      <div v-if="showMore" class="fm-toolbar__more" @click.stop="handleMore">
        <ic-more></ic-more>
      </div>
    </div>
  </div>
</template>

<script>
    import * as types from '../store/types';

    import IcSearch from "./icons/IcSearch";
    import IcBack from "./icons/IcBack";
    import IcBell from "./icons/IcBell";
    import IcSettings from "./icons/IcSettings";
    import IcMore from "./icons/IcMore";
    import FmAvatar from "./FmAvatar";

    export default {
        name: "FmToolbar",
        components: {FmAvatar, IcMore, IcSettings, IcBell, IcBack, IcSearch},
        props: {
            showToolbar: {
                type: Boolean,
                default: true,
            },
            showBack: {
                type: Boolean,
                default: false,
            },
            showAvatar: {
                type: Boolean,
                default: true,
            },
            showTitle: {
                type: Boolean,
                default: true,
            },
            title: {
                type: String,
                default: 'Le Flatmate',
            },
            showSearch: {
                type: Boolean,
                default: false,
            },
            showBell: {
                type: Boolean,
                default: false,
            },
            showSettings: {
                type: Boolean,
                default: false,
            },
            showMore: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                visibleMenu: 'settings',
                menus: {
                    settings: {
                        header: 'Paramètres',
                        buttons: [
                            {
                                text: 'Profil',
                                handler: () => {
                                    this.$router.push({name: 'settingsProfile'});
                                },
                            },
                            {
                                text: 'Notifications',
                                handler: () => {
                                    this.$router.push({name: 'settingsNotifications'});
                                },
                            },
                            {
                                text: 'Mentions légales',
                                handler: () => {
                                    this.$router.push({name: 'legalNotice'});
                                },
                            },
                            {
                                text: 'Déconnexion',
                                role: 'destructive',
                                handler: () => {
                                    this.$store.dispatch(types.DISCONNECT).then(() => {
                                        this.$router.push({name: 'log-in'});
                                    }).catch(e => {
                                        window.console.log(e);
                                    });
                                },
                            },
                        ],
                    },
                }
            };
        },
        computed: {
            userName() {
                return this.$store.getters[types.GET_USER].name;
            },
        },
        methods: {
            toggleMenu() {
                this.$store.commit(types.TOGGLE_SIDE_MENU);
            },
            handleBack() {
                this.$emit('back-clicked');
                this.$router.back();
            },
            handleAvatar() {
                this.$emit('avatar-clicked');
                this.toggleMenu();
            },
            handleTitle() {
                this.$emit('title-clicked');
            },
            handleSearch() {
                this.$emit('search-clicked');
            },
            handleBell() {
                this.$emit('bell-clicked');
            },
            handleSettings() {
                this.visibleMenu = 'settings';
                this.presentActionSheet();
                this.$emit('settings-clicked');
            },
            handleMore() {
                this.$emit('more-clicked');
            },
            presentActionSheet() {
                return this.$ionic.actionSheetController
                    .create(this.menus[this.visibleMenu])
                    .then(a => a.present())
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_settings.scss";

  .fm-toolbar {
    line-height: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1.5rem;

    &__left, &__right {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      & > * {
        padding: .8rem .5rem .5rem;
        margin: 0;
      }
    }

    &__left {
      & > :first-child {
        margin-left: 0;
        padding-left: 0;
      }
    }

    &__right {
      justify-content: flex-end;

      & > :last-child {
        margin-right: 0;
        padding-right: 0;
      }
    }

    &__avatar {
      margin: 0;
    }
  }
</style>
