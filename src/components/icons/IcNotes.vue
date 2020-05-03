<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`">
      <path d="M3,0H16c2,0,3,1,3,2.5V3H3.5V21S0,20.9,0,21V3.27A3.28,3.28,0,0,1,3,0Z" :fill="iconColor"
            :class="{ 'active--main-fill': isActive }"/>
      <rect x="3.46" y="2.97" width="15" height="20.8" :stroke="iconColor" fill="none"
            :class="{ 'active--main-stroke': isActive, 'active--light-fill': isActive }"/>
      <g id="lines" :stroke="iconColor" fill="none">
        <line x1="6.5" y1="8.5" x2="15.5" y2="8.5"
              :class="{ 'active--main-stroke': isActive }"/>
        <line x1="6.5" y1="11.5" x2="14.5" y2="11.5"
              :class="{ 'active--main-stroke': isActive }"/>
        <line x1="6.5" y1="14.5" x2="12.5" y2="14.5"
              :class="{ 'active--main-stroke': isActive }"/>
        <line x1="6.5" y1="17.97" x2="15.5" y2="17.97"
              :class="{ 'active--main-stroke': isActive }"/>
      </g>
      <g id="pen">
        <path d="M21,18.67h0V4.47h3v14.2l-1.5,2.8Z" :stroke="iconColor" fill="none"
              :class="{ 'active--main-stroke': isActive, 'active--light-fill': isActive }"/>
        <path d="M24,19.47H21l1.5,2C22.56,21.47,24,19.47,24,19.47Z" :fill="iconColor"
              :class="{ 'active--main-fill': isActive }"/>
        <path d="M21,5h3" :stroke="iconColor" fill="none" stroke-width="2"
              :class="{ 'active--main-stroke': isActive }"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcNotes",
        props: {
            iconName: {
                type: String,
                default: 'notes'
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
