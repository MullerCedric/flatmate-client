<template>
  <div :class="['fm-side-menu-discussions-message', {'fm-side-menu-discussions-message--unread': isUnread}]">
    <ic-msg-status
            v-if="(message.from_id === userId || isUnread) && message.type === 'message'"
            :user-id="userId"
            :nb-participants="nbParticipants"
            :read-by="message.read_by">
    </ic-msg-status>
    {{ formatMessage }}
  </div>
</template>

<script>
    import IcMsgStatus from "./icons/IcMsgStatus";

    export default {
        name: "FmSideMenuDiscussionsLatestMessage",
        components: {IcMsgStatus},
        props: {
            message: {
                type: Object,
                required: true,
            },
            userId: {
                type: Number,
                required: true,
            },
            nbParticipants: {
                type: Number,
                required: true,
            }
        },
        computed: {
            isUnread() {
                return !this.message.read_by.some((user) => user.id === this.userId);
            },
            formatMessage() {
                if (!this.message.from_id) return this.message.content;
                if (this.message.from.id === this.userId) {
                    return 'Vous: ' + this.message.content;
                } else {
                    return this.message.from.name + ': ' + this.message.content;
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-side-menu-discussions-message {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &--unread {
      font-weight: $bold;
    }
  }
</style>
