<template>
  <div class="fm-side-menu-discussions">
    <div v-for="discussion in discussions" :key="discussion.id"
         class="fm-side-menu-discussions__discussion">
      <div class="fm-side-menu-discussions__avatar"></div>
      <div class="fm-side-menu-discussions__discussion-content">
        <div class="fm-side-menu-discussions__discussion-label">{{ formatLabel(discussion) }}</div>
        <div class="fm-side-menu-discussions__discussion-message">{{ formatLastMessage(discussion.messages) }}</div>
      </div>
    </div>
    <div class="fm-side-menu-discussions__floating-buttons">
      <div class="fm-side-menu-discussions__floating-button fm-side-menu-discussions__floating-button--main">
        <ic-plus>
        </ic-plus>
      </div>
    </div>
  </div>
</template>

<script>
    import IcPlus from "./icons/IcPlus";
    import * as types from "../store/types";

    export default {
        name: "FmSideMenuDiscussions",
        components: {IcPlus},
        computed: {
            discussions() {
                return this.$store.getters[types.GET_DISCUSSIONS];
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_DISCUSSIONS);
        },
        methods: {
            formatLabel(discussion) {
                return discussion.label || discussion.participants.map((user) => {
                    return user.name;
                }).join(', ');
            },
            formatLastMessage(messages) {
                const lastMessage = messages[messages.length - 1], limit = 23;
                let displayMsg = '';
                if (lastMessage.from.id === 1) {
                    displayMsg = 'Vous: ' + lastMessage.content;
                } else {
                    displayMsg = lastMessage.from.name + ': ' + lastMessage.content;
                }

                return displayMsg.length > limit ? displayMsg.substring(0, limit) + '...' : displayMsg;
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu-discussions {
    &__discussion {
      padding: .5rem 1.5rem;
      margin-bottom: .5rem;
      display: flex;
      align-items: center;
      position: relative;

      &-content {
        flex: 1;
      }

      &-label {
        font-weight: $bold;
      }
    }

    &__avatar {
      width: 2.5em;
      height: 2.5em;
      overflow: hidden;
      text-align: center;
      padding: 0;
      margin: .5rem .5rem .5rem 0;
      border-radius: 100%;
      box-shadow: 0 0 .15em $shadow;
      background-color: $grey;

      & img {
        max-width: 100%;
        margin: 0;
        padding: 0;
        border: none;
      }
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
  }
</style>
