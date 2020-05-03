<template>
  <div v-if="showToolbar" class="fm-toolbar">
    <div class="fm-toolbar__left">
      <div v-if="showBack" class="fm-toolbar__back" @click="$router.back()">
        <ic-back :icon-color="iconColors"></ic-back>
      </div>
      <div class="fm-toolbar__avatar">

      </div>
      <h1 v-if="showTitle" class="fm-toolbar__title">
        {{ title }}
      </h1>
    </div>
    <div class="fm-toolbar__right">
      <div v-if="showSearch" class="fm-toolbar__search">
        <ic-search :icon-color="iconColors"></ic-search>
      </div>
      <div v-if="showBell" class="fm-toolbar__bell">
        <ic-bell :icon-color="iconColors"></ic-bell>
      </div>
      <div v-if="showSettings" class="fm-toolbar__settings">
        <ic-settings :icon-color="iconColors"></ic-settings>
      </div>
      <div v-if="showMore" class="fm-toolbar__more">
        <ic-more :icon-color="iconColors"></ic-more>
      </div>
    </div>
  </div>
</template>

<script>
    import IcSearch from "./icons/IcSearch";
    import IcBack from "./icons/IcBack";
    import IcBell from "./icons/IcBell";
    import IcSettings from "./icons/IcSettings";
    import IcMore from "./icons/IcMore";

    export default {
        name: "FmToolbar",
        components: {IcMore, IcSettings, IcBell, IcBack, IcSearch},
        props: {
            showToolbar: {
                type: Boolean,
                default: true,
            },
            showBack: {
                type: Boolean,
                default: false,
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
                iconColors: '#707070',
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_settings.scss";

  .fm-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;

    &__left, &__right {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      & > * {
        padding: .8em .5em .5em;
        margin: 0;
      }
    }

    &__right {
      justify-content: flex-end;
    }

    &__avatar {
      width: 2.5em;
      height: 2.5em;
      overflow: hidden;
      text-align: center;
      padding: 0;
      margin-right: .5em;
      border-radius: 100%;
      box-shadow: 0 0 .15em $shadow;
      background-color: $lightGrey;

      & img {
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: none;
      }
    }
  }
</style>
