<template>
  <div @click="$emit('discussion-clicked')">
    <router-link tag="div" class="fm-side-menu-discussion"
                 :to="{ name: 'discussionsShow', params: { id: discussion.id } }">
      <fm-avatar class="fm-side-menu-discussion__avatar"
                 :user-name="formatLabel(discussion)" :img-url="discussion.avatar">
      </fm-avatar>
      <div class="fm-side-menu-discussion__content">
        <div class="fm-side-menu-discussion__label">
          {{ formatLabel(discussion) }}
        </div>
        <fm-side-menu-discussions-latest-message :message="discussion.latestMessage" :user-id="userId"
                                                 :nb-participants="discussion.participants.length">
        </fm-side-menu-discussions-latest-message>
      </div>
    </router-link>
  </div>
</template>

<script>
    import * as types from "../store/types";
    import EventBus from "../event-bus";

    import FmAvatar from "./FmAvatar";
    import FmSideMenuDiscussionsLatestMessage from "./FmSideMenuDiscussionsLatestMessage";

    export default {
        name: "FmSideMenuDiscussion",
        components: {FmSideMenuDiscussionsLatestMessage, FmAvatar},
        props: {
            discussion: {
                type: Object,
                required: true,
            },
            userId: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                channel: null,
            }
        },
        computed: {
            echo() {
                return this.$store.getters[types.GET_ECHO];
            },
            echoChannelName() {
                return 'discussion.' + this.discussion.id;
            },
        },
        mounted() {
            if (this.echo) {
                this.channel = this.echo.join(this.echoChannelName);
                this.channel
                    .listen('.message.created', e => {
                        this.$store.commit(types.SET_LATEST_MESSAGE, e.message);
                        this.$store.commit(types.SET_NEW_MESSAGE, {...e.message, hasToBeSent: true});
                        this.EBEmitMessage(e.message);
                    })
                    .listen('.message.read', e => {
                        if (e.message.id === this.discussion.latestMessage.id) {
                            this.$store.commit(types.SET_LATEST_MESSAGE, e.message);
                        }
                        this.EBEmitMessageReading(e.message);
                    });
            }
        },
        beforeDestroy() {
            this.channel.stopListening('.message.created');
            this.channel.stopListening('.message.read');
            if (this.echo) {
                this.echo.leave(this.echoChannelName);
            }
        },
        methods: {
            formatLabel(discussion) {
                return discussion.label || discussion.participants.map((user) => {
                    return user.name;
                }).join(', ');
            },
            EBEmitMessage(message) {
                EventBus.$emit(types.EB_NEW_MESSAGE, message);
            },
            EBEmitMessageReading(message) {
                EventBus.$emit(types.EB_MESSAGE_READING, message);
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu-discussion {
    padding: .5rem 1.5rem;
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    &__content {
      flex: 1;
      overflow: hidden;
    }

    &__label {
      font-weight: $bold;
    }

    &__avatar {
      margin: .5rem .5rem .5rem 0;
    }
  }

</style>
