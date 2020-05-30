<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor">
      <g :class="{'hide': status !== 'local'}">
        <path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z' style="fill: none;"
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      </g>
      <g :class="{ 'hide': status !== 'sent' }">
        <polyline points='416 128 192 384 96 288' style="fill: none;"
                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      </g>
      <g :class="{ 'hide': !(status === 'received' || status === 'read') }">
        <polyline points='464 128 240 384 144 288' style="fill: none;" :class="{'colored': status === 'read'}"
                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
        <line x1='144' y1='384' x2='48' y2='288' style="fill: none;" :class="{'colored': status === 'read'}"
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
        <line x1='368' y1='128' x2='232' y2='284' style="fill: none;" :class="{'colored': status === 'read'}"
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      </g>
      <g :class="{'hide': status !== 'unread'}">
        <path d='M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z'
              class="colored" style="stroke: none;"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcMsgStatus",
        props: {
            iconName: {
                type: String,
                default: 'message status'
            },
            width: {
                type: [Number, String],
                default: 18
            },
            height: {
                type: [Number, String],
                default: 18
            },
            isActive: {
                type: Boolean,
                default: false,
            },
            iconColor: {
                type: String,
                default: 'currentColor'
            },
            readBy: {
                type: Array,
                default: () => [],
            },
            nbParticipants: {
                type: Number,
                default: 1,
            },
            userId: {
                type: Number,
                default: -1,
            },
        },
        computed: {
            status() {
                if (this.readBy.length === this.nbParticipants) {
                    return 'read'; // The message has been read by all participant
                }
                if (!this.readBy.some((user) => user.id === this.userId)) {
                    // If the user is not among the readBy array, either it hasn't been send to the API yet
                    // either it's an unread message
                    return this.readBy.length <= 0 ? 'local' : 'unread';
                }
                if (this.readBy.length === 1 && this.readBy[0].id === this.userId) {
                    // When the only "reader" is the current user
                    return 'sent';
                }
                // Fallback : at least another person read it but not all
                return 'received';
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings.scss";

  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -3px;
  }

  .hide {
    opacity: 0;
  }

  .colored {
    stroke: $main;
    fill: $main;
  }
</style>
