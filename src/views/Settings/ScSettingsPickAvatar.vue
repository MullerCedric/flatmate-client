<template>
  <fm-screen content-pos="center" class="sc-settings-pick-avatar">
    <h1 class="sc-settings-pick-avatar__title">
      Bienvenue, {{ user.name }} !<br>
      Choisissez un avatar
    </h1>
    <fm-avatar-select :user-name="user.name" :user-avatar="user.avatar"
                      @avatar-uploaded="$router.push({name: 'dashboard'})">
    </fm-avatar-select>
    <router-link :to="{name: 'dashboard'}" class="sc-settings-pick-avatar__link">
      Passer
    </router-link>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmAvatarSelect from "../../components/FmAvatarSelect";

    export default {
        name: "ScSettingsPickAvatar",
        components: {FmAvatarSelect, FmScreen},
        computed: {
            user() {
                return this.$store.getters[types.GET_USER];
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-settings-pick-avatar {
    text-align: center;

    &__title {
      font-size: 1.25rem;
      font-weight: $medium;
      color: $black;
      margin: 0 0 .125rem;
    }

    &__link {
      margin-top: .5rem;
      font-weight: $medium;
      color: $black;
      opacity: .6;
    }
  }
</style>
