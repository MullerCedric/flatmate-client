<template>
  <div :class="['fm-message',
    {'fm-message--mine': message.from && message.from.id === userId},
    {'fm-message--new': message.from && prevUserId !== message.from.id},
    {'fm-message--last': message.from && nextUserId !== message.from.id},
    {'fm-message--log': !message.from_id},
    {'fm-message--unrolled': isInfoShowed},
  ]">
    <div v-if="message.from_id">
      <div v-if="prevUserId !== message.from.id && !isFromUser"
           class="fm-message__name">
        {{ message.from.name }}
      </div>
      <fm-avatar v-if="nextUserId !== message.from.id && !isFromUser"
                 :user-name="message.from.name" :img-url="message.from.avatar"
                 size="s" class="fm-message__avatar">
      </fm-avatar>
      <div v-if="isInfoShowed" class="fm-message__info">
        {{ msgTime(message.created_at) }}
        <ic-msg-status v-if="isFromUser" class="fm-message__status" :user-id="userId"
                       :nb-participants="nbParticipants" :read-by="readBy">
        </ic-msg-status>
      </div>
      <div class="fm-message__content" @click="$emit('select-message', message.id)">
        {{ message.content }}
      </div>
      <div v-if="isInfoShowed" class="fm-message__info">
        <span v-if="readBy.length <= 1">
          <span v-if="nbParticipants === 1">
            Vous seul voyez ce message
          </span>
          <span v-else>
            Non lu
          </span>
        </span>
        <span v-if="readBy.length > 1">
          Vu par
        </span>
        <fm-avatar size="xs" v-for="user in readBy" :key="user.id" :title="user.name"
                   :user-name="user.name" :img-url="user.avatar"
                   :class="['fm-message__readby', {'fm-message__readby--me': user.id === userId}]">
        </fm-avatar>
      </div>
    </div>
    <div v-if="!message.from_id">
      ** {{ message.content }} **
    </div>
  </div>
</template>

<script>
    import moment from 'moment';

    import FmAvatar from "./FmAvatar";
    import IcMsgStatus from "./icons/IcMsgStatus";

    moment.locale('fr');

    export default {
        name: "FmMessage",
        components: {IcMsgStatus, FmAvatar},
        props: {
            message: {
                type: Object,
                required: true,
            },
            userId: {
                type: Number,
                default: 0,
            },
            prevUserId: {
                type: Number,
                default: 0,
            },
            nextUserId: {
                type: Number,
                default: 0,
            },
            showingInfoForMessage: {
                type: Number,
                default: 0,
            },
            nbParticipants: {
                type: Number,
                default: 1,
            },
        },
        computed: {
            readBy() {
                return this.message.read_by ? this.message.read_by : [];
            },
            isInfoShowed() {
                return this.showingInfoForMessage === this.message.id;
            },
            isFromUser() {
                return this.message.from_id === this.userId;
            },
        },
        methods: {
            msgTime(msgDatetime) {
                return moment(msgDatetime).calendar();
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-message {
    position: relative;
    max-width: 25rem;
    width: calc(90% - 2.5rem);
    margin: 0 0 0 1.75rem;

    &__name {
      font-weight: $medium;
    }

    &__avatar {
      position: absolute;
      bottom: 0;
      left: -2.625rem;
    }

    &__info {
      font-size: .875rem;
      display: flex;
      align-items: center;
    }

    &__content {
      display: inline-block;
      background-color: $white;
      padding: .5rem .375rem .5rem .5rem;
      border-radius: .25rem .75rem .75rem .25rem;
      border: .0625rem solid $lightGrey;
    }

    &:nth-child(n + 2) {
      margin-top: .25rem;
    }

    &--unrolled {
      margin-bottom: .5rem;

      &:nth-child(n + 2) {
        margin-top: .75rem;
      }
    }

    &--new {
      &:nth-child(n + 2) {
        margin-top: .75rem;
      }

      & .fm-message__content {
        border-radius: .75rem .75rem .75rem .25rem;
      }

      &.fm-message--mine .fm-message__content {
        border-radius: .75rem .75rem .25rem .75rem;
      }
    }

    &--last {
      & .fm-message__content {
        border-radius: .25rem .75rem .75rem .75rem;
      }

      &.fm-message--mine .fm-message__content {
        border-radius: .75rem .25rem .75rem .75rem;
      }
    }

    &--last.fm-message--new {
      & .fm-message__content {
        border-radius: .75rem;
      }
    }

    &--mine {
      align-self: flex-end;
      text-align: right;

      & .fm-message__content {
        text-align: left;
        background-color: $main;
        color: $white;
        border-color: transparent;
        border-radius: .75rem .25rem .25rem .75rem;
      }

      & .fm-message__info {
        justify-content: flex-end;
      }
    }

    &__readby {
      display: inline-block;
      vertical-align: middle;

      &--me {
        display: none;
      }
    }
  }
</style>
