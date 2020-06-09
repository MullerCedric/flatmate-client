<template>
  <div class="fm-tab-bar">
    <div class="fm-tab-bar__links">
      <router-link class="fm-tab-bar__link"
                   :class="{ 'fm-tab-bar__link--hidden': showCreateMenu }"
                   :to="{name: 'dashboard'}"
                   v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <a :href="href" @click="navigate" class="tab" :class="{ 'tab--active': isExactActive }">
          <ic-home class="tab__icon" :is-active="isExactActive">
          </ic-home>
        </a>
      </router-link>
      <router-link class="fm-tab-bar__link"
                   :class="{ 'fm-tab-bar__link--hidden': showCreateMenu }"
                   :to="{name: 'eventsCalendar'}"
                   v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <a :href="href" @click="navigate" class="tab" :class="{ 'tab--active': isExactActive }">
          <ic-calendar class="tab__icon" :is-active="isExactActive">
          </ic-calendar>
        </a>
      </router-link>
      <div v-if="!createLink" class="fm-tab-bar__create" @click="showCreateMenu = !showCreateMenu"
           :class="{ 'fm-tab-bar__create--active': showCreateMenu }">
        <ic-plus icon-color="#FFFFFF">
        </ic-plus>
      </div>
      <router-link v-if="createLink" tag="div" class="fm-tab-bar__create" :to="createLink"
                   :class="{ 'fm-tab-bar__create--active': showCreateMenu }">
        <ic-plus icon-color="#FFFFFF">
        </ic-plus>
      </router-link>
      <router-link class="fm-tab-bar__link"
                   :class="{ 'fm-tab-bar__link--hidden': showCreateMenu }"
                   :to="{name: 'notes'}"
                   v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <a :href="href" @click="navigate" class="tab" :class="{ 'tab--active': isExactActive }">
          <ic-notes class="tab__icon" :is-active="isExactActive">
          </ic-notes>
        </a>
      </router-link>
      <router-link class="fm-tab-bar__link"
                   :class="{ 'fm-tab-bar__link--hidden': showCreateMenu }"
                   :to="{name: 'wallet'}"
                   v-slot="{ href, route, navigate, isActive, isExactActive }"
      >
        <a :href="href" @click="navigate" class="tab" :class="{ 'tab--active': isExactActive }">
          <ic-wallet class="tab__icon" :is-active="isExactActive">
          </ic-wallet>
        </a>
      </router-link>
    </div>
    <div class="fm-tab-bar__content" :class="{ 'fm-tab-bar__content--active': showCreateMenu }">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
    import IcCalendar from "./icons/IcCalendar";
    import IcHome from "./icons/IcHome";
    import IcPlus from "./icons/IcPlus";
    import IcNotes from "./icons/IcNotes";
    import IcWallet from "./icons/IcWallet";

    export default {
        name: "FmTabBar",
        components: {IcWallet, IcNotes, IcPlus, IcHome, IcCalendar},
        props: {
            createLink: {
                type: Object,
            }
        },
        data() {
            return {
                showCreateMenu: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-tab-bar {
    line-height: 1;
    background-color: $white;
    border-top: 1px solid $lighterGrey;
    border-radius: 1.5rem 1.5rem 0 0;
    padding: 0 .5rem;

    &__links {
      display: flex;
      justify-content: space-around;
    }

    &__link {
      opacity: 1;
      transition: opacity .2s ease-in;

      &--hidden {
        opacity: 0;
      }
    }

    &__create {
      align-self: flex-start;
      padding: .75rem;
      background-color: $black;
      border-radius: 100%;
      position: relative;
      box-shadow: 0 0 .25rem $shadow, 0 0 0 .5rem $lighterGrey;
      top: -1.5rem;
      transition: transform .2s,
      padding .2s,
      box-shadow .2s,
      top .2s;

      &--active {
        transform: rotate(-45deg) scale(.75);
        padding: .25rem;
        box-shadow: 0 0 0 1px $black, 0 0 0 .1rem $white;
        top: .5rem;
      }
    }

    &__content {
      overflow: hidden;
      padding: 0 1.125rem;
      max-height: 0;
      transition: padding .3s;

      &--active {
        max-height: 100%;
        padding: .75rem 1.125rem 1.5rem;
      }
    }
  }

  .tab {
    color: $darkGrey;

    &__icon {
      margin: .25rem;
      padding: .75rem .25rem;
      box-sizing: content-box;
    }
  }
</style>
