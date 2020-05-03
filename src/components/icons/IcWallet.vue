<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`">
      <g :stroke="iconColor" fill="none">
        <circle cx="11.96" cy="11.97" r="12" stroke-width="1.5"
                :class="{ 'active--main-stroke': isActive, 'active--light-fill': isActive }"/>
      </g>
      <g :fill="iconColor" stroke="none">
        <path d="M12,17a4.87,4.87,0,0,1-1.2-.1,3.18,3.18,0,0,1-.9-.3c-.3-.1-.6-.3-.9-.4v-1.6a4,4,0,0,0,1.3.7,4.15,4.15,0,0,0,1.6.3c.6,0,1-.1,1.2-.4a1.16,1.16,0,0,0,.4-1,1.14,1.14,0,0,0-.3-.8,2.18,2.18,0,0,0-.8-.5c-.3-.1-.7-.3-1.1-.4a2,2,0,0,1-.8-.4,1.79,1.79,0,0,1-.7-.5,2.18,2.18,0,0,1-.5-.8,1.5,1.5,0,0,1-.2-1,4.4,4.4,0,0,1,.2-1,4.05,4.05,0,0,1,.5-.9,1.46,1.46,0,0,1,.9-.6,3.18,3.18,0,0,1,1.4-.2,2.22,2.22,0,0,1,.9.1,1.45,1.45,0,0,1,.7.2,5.9,5.9,0,0,1,.8.4v1.6a1.61,1.61,0,0,0-.7-.4c-.2-.1-.5-.2-.7-.3a2.77,2.77,0,0,0-.9-.1,2.22,2.22,0,0,0-.9.1,2.18,2.18,0,0,0-.5.4,1.45,1.45,0,0,0-.2.7,1.88,1.88,0,0,0,.2.8,1.79,1.79,0,0,0,.7.5,10.37,10.37,0,0,0,1,.4,6.89,6.89,0,0,1,1,.4,2.18,2.18,0,0,1,.8.5,5.55,5.55,0,0,1,.6.8,3.59,3.59,0,0,1,.2,1.1,3.19,3.19,0,0,1-.3,1.4,2.59,2.59,0,0,1-1,1.1A9,9,0,0,1,12,17Z"
              :class="{ 'active--main-fill': isActive }"/>
        <rect x="11.5" y="6" width="1.3" height="2"
              :class="{ 'active--main-fill': isActive }"/>
        <rect x="11.5" y="16" width="1.3" height="2"
              :class="{ 'active--main-fill': isActive }"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcWallet",
        props: {
            iconName: {
                type: String,
                default: 'wallet'
            },
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            },
            iconColor: {
                type: String,
                default: 'currentColor'
            },
            isActive: {
                type: Boolean,
                default: false,
            },
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings.scss";

  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
  }

  .active {
    &--main-stroke {
      stroke: $main;
    }

    &--main-fill {
      fill: $main;
    }

    &--light-stroke {
      stroke: $lightMain;
    }

    &--light-fill {
      fill: $lightMain;
    }
  }
</style>
