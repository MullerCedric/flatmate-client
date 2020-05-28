<template>
  <div class="fm-side-menu-discussions">
    <div v-for="discussion in discussions" :key="discussion.id" @click="closeMenu">
      <router-link tag="div" class="fm-side-menu-discussions__discussion"
                   :to="{ name: 'discussionsShow', params: { id: discussion.id } }">
        <fm-avatar class="fm-side-menu-discussions__avatar">
        </fm-avatar>
        <div class="fm-side-menu-discussions__discussion-content">
          <div class="fm-side-menu-discussions__discussion-label">
            {{ formatLabel(discussion) }}
          </div>
          <div class="fm-side-menu-discussions__discussion-message">
            {{ formatLatestMessage(discussion.latestMessage) }}
          </div>
        </div>
      </router-link>
    </div>
    <div class="fm-side-menu-discussions__floating-buttons">
      <div class="fm-side-menu-discussions__floating-button fm-side-menu-discussions__floating-button--main"
           @click="closeMenu">
        <router-link :to="{name: 'discussionsCreate'}" tag="div">
          <ic-plus>
          </ic-plus>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import IcPlus from "./icons/IcPlus";
    import * as types from "../store/types";
    import FmAvatar from "./FmAvatar";

    export default {
        name: "FmSideMenuDiscussions",
        components: {FmAvatar, IcPlus},
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
            formatLatestMessage(message) {
                // const limit = 23;
                let displayMsg = '';
                if (!message.from_id) return message.content;
                if (message.from.id === 1) {
                    displayMsg = 'Vous: ' + message.content;
                } else {
                    displayMsg = message.from.name + ': ' + message.content;
                }
                return displayMsg;
            },
            closeMenu() {
                this.$store.commit(types.CLOSE_SIDE_MENU);
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
        overflow: hidden;
      }

      &-label {
        font-weight: $bold;
      }

      &-message {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    &__avatar {
      margin: .5rem .5rem .5rem 0;
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
