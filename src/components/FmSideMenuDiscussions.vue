<template>
  <div class="fm-side-menu-discussions">
    <fm-side-menu-discussion v-for="discussion in discussions" :key="discussion.id" @discussion-clicked="closeMenu"
                             :discussion="discussion" :user-id="userId">
    </fm-side-menu-discussion>
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
    import * as types from "../store/types";

    import IcPlus from "./icons/IcPlus";
    import FmSideMenuDiscussion from "./FmSideMenuDiscussion";

    export default {
        name: "FmSideMenuDiscussions",
        components: {FmSideMenuDiscussion, IcPlus},
        data() {
            return {
                channel: null,
            }
        },
        computed: {
            discussions() {
                return this.$store.getters[types.GET_DISCUSSIONS];
            },
            userId() {
                return this.$store.getters[types.GET_USER].id;
            },
            echo() {
                return this.$store.getters[types.GET_ECHO];
            },
            echoChannelName() {
                return 'discussions';
            },
        },
        mounted() {
            this.$store.dispatch(types.FETCH_DISCUSSIONS)
                .then(() => {
                    if (this.echo) {
                        this.channel = this.echo.join(this.echoChannelName);
                        this.channel
                            .listen('.discussion.created', e => {
                                if (e.discussion.participants && e.discussion.participants.find((user) => user.id === this.userId)) {
                                    this.$store.commit(types.SET_NEW_DISCUSSION, e.discussion);
                                }
                            })
                    }
                });

        },
        beforeDestroy() {
            this.channel.stopListening('.discussion.created');
            this.echo.leave(this.echoChannelName);
        },
        methods: {
            closeMenu() {
                this.$store.commit(types.CLOSE_SIDE_MENU);
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu-discussions {
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
