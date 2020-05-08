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
        <rect x='32' y='80' width='448' height='256' rx='16' ry='16' transform='translate(512 416) rotate(180)'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <line x1='64' y1='384' x2='448' y2='384'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <line x1='96' y1='432' x2='416' y2='432'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <circle cx='256' cy='208' r='80'
                stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
                class="colored"/>
        <path d='M480,160a80,80,0,0,1-80-80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <path d='M32,160a80,80,0,0,0,80-80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <path d='M480,256a80,80,0,0,0-80,80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <path d='M32,256a80,80,0,0,1,80,80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
      </g>
      <g :class="{ 'hide': !isActive}">
        <path d='M448,400H64a16,16,0,0,1,0-32H448a16,16,0,0,1,0,32Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M416,448H96a16,16,0,0,1,0-32H416a16,16,0,0,1,0,32Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M32,272H16v48a32,32,0,0,0,32,32H96V336A64.07,64.07,0,0,0,32,272Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M480,240h16V176H480a96.11,96.11,0,0,1-96-96V64H128V80a96.11,96.11,0,0,1-96,96H16v64c5,0,10.34,0,16,0a96.11,96.11,0,0,1,96,96v16H384V336A96.11,96.11,0,0,1,480,240ZM256,304a96,96,0,1,1,96-96A96.11,96.11,0,0,1,256,304Z'
              class="colored--active" style="stroke: none;"/>
        <circle cx='256' cy='208' r='64'
                class="colored--active" style="stroke: none;"/>
        <path d='M416,336v16h48a32,32,0,0,0,32-32V272H480A64.07,64.07,0,0,0,416,336Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M480,144h16V96a32,32,0,0,0-32-32H416V80A64.07,64.07,0,0,0,480,144Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M96,80V64H48A32,32,0,0,0,16,96v48H32A64.07,64.07,0,0,0,96,80Z'
              class="colored--active" style="stroke: none;"/>
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
