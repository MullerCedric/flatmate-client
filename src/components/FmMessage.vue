<template>
  <div :class="['fm-message',
    {'fm-message--mine': message.from && message.from.id === userId},
    {'fm-message--new': message.from && prevUserId !== message.from.id},
    {'fm-message--last': message.from && nextUserId !== message.from.id},
    {'fm-message--log': !message.from_id},
  ]">
    <div v-if="message.from_id">
      <div v-if="prevUserId !== message.from.id && message.from.id !== userId"
           class="fm-message__name">
        {{ message.from.name }}
      </div>
      <fm-avatar v-if="nextUserId !== message.from.id && message.from.id !== userId"
                 size="s" class="fm-message__avatar">
      </fm-avatar>
      <div class="fm-message__content">
        {{ message.content }}
      </div>
    </div>
    <div v-if="!message.from_id">
      ** {{ message.content }} **
    </div>
  </div>
</template>

<script>
    import FmAvatar from "./FmAvatar";

    export default {
        name: "FmMessage",
        components: {FmAvatar},
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
        },
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
    }
  }
</style>
