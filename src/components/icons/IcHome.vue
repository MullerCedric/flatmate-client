<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`">
      <g :class="{ 'hide': isActive }">
        <path d='M80,212V448a16,16,0,0,0,16,16h96V328a24,24,0,0,1,24-24h80a24,24,0,0,1,24,24V464h96a16,16,0,0,0,16-16V212'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <path d='M480,256,266.89,52c-5-5.28-16.69-5.34-21.78,0L32,256'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <polyline points='400 179 400 64 352 64 352 133'
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
                  class="colored"/>
      </g>
      <g :class="{ 'hide': !isActive}">
        <path d='M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z'
              class="colored--active" style="stroke: none;"/>
      </g>
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

  .hide {
    opacity: 0;
  }

  .colored {
    stroke: $black;
    fill: $black;

    &--active {
      stroke: $main;
      fill: $main;
    }
  }
</style>
