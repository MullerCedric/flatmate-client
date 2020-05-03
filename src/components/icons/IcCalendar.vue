<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M0,3H24V24H0Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            :class="{ 'active--main-stroke': isActive, 'active--light-fill': isActive }"/>
      <line x1="0.46" y1="8.97" x2="23.46" y2="8.97" stroke-linecap="round"
            :class="{ 'active--main-stroke': isActive }"/>
      <path d="M6.46,5V0" stroke-linecap="round" stroke-width="2"
            :class="{ 'active--main-stroke': isActive }"/>
      <path d="M17.46,5V0" stroke-linecap="round" stroke-width="2"
            :class="{ 'active--main-stroke': isActive }"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcCalendar",
        props: {
            iconName: {
                type: String,
                default: 'calendar'
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
