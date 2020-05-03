<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M4,24h6V19h4v5h6V13h4L12,0,0,13H4Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            :class="{ 'active--main-stroke': isActive, 'active--light-fill': isActive }"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcHome",
        props: {
            iconName: {
                type: String,
                default: 'home'
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
