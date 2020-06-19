<template>
  <fm-screen :toolbarProps="toolbarProps">
    <fm-preview>
      <fm-block :is-pinned="true">
        <div class="sc-notes__title">Un ami sera là mardi</div>
        <div class="sc-notes__sub-title">Heure et date ici</div>
      </fm-block>
      <fm-block :is-pinned="true">
        <div class="sc-notes__title">Nouveau poème</div>
        <div class="sc-notes__sub-title">Sous-titre</div>
      </fm-block>
      <fm-block>
        <div class="sc-notes__title">Mot de passe Wifi</div>
        <div class="sc-notes__sub-title">Sous-titre efse</div>
      </fm-block>
      <fm-block :is-offset="true">
        <div class="sc-notes__title">LA TERRE EST PLATE !!</div>
        <div class="sc-notes__sub-title">Sous-titre ??</div>
      </fm-block>
      <fm-block>
        <div class="sc-notes__title">Vous lisez vraiment ça ?</div>
      </fm-block>
    </fm-preview>

    <template #tab>
      <fm-tab-bar>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    //import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmTabBar from "../../components/FmTabBar";
    import FmPreview from "../../components/FmPreview";
    import FmBlock from "../../components/FmBlock";

    export default {
        name: "ScNotes",
        components: {FmBlock, FmPreview, FmTabBar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Notes',
                    showAvatar: true,
                    showSearch: true,
                    showMore: true,
                    showBubble: true,
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .sc-notes {
    &__title {
      font-weight: $bold;
    }

    &__sub-title {
      font-size: .875rem;
    }
  }
</style>
