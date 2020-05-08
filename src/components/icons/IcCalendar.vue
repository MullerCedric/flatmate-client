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
        <rect x='48' y='80' width='416' height='384' rx='48' ry='48'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"
        />
        <path d='M397.82,80H114.18C77.69,80,48,110.15,48,147.2V208H64c0-16,16-32,32-32H416c16,0,32,16,32,32h16V147.2C464,110.15,434.31,80,397.82,80Z'/>
        <circle cx='296' cy='232' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='376' cy='232' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='296' cy='312' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='376' cy='312' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='136' cy='312' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='216' cy='312' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='136' cy='392' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='216' cy='392' r='24' style="stroke: none;"
                class="colored"/>
        <circle cx='296' cy='392' r='24' style="stroke: none;"
                class="colored"/>
        <line x1='128' y1='48' x2='128' y2='80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <line x1='384' y1='48' x2='384' y2='80'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
      </g>
      <g :class="{ 'hide': !isActive}">
        <path d='M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V128A64,64,0,0,0,416,64ZM136,416a24,24,0,1,1,24-24A24,24,0,0,1,136,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,136,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,216,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,216,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,296,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,256Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,376,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,376,256Zm72-120v16a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V128A32.09,32.09,0,0,1,96,96H416a32.09,32.09,0,0,1,32,32Z'
              class="colored--active" style="stroke: none;"/>
      </g>
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
