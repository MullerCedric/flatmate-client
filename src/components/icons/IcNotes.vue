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
        <path d='M416,221.25V416a48,48,0,0,1-48,48H144a48,48,0,0,1-48-48V96a48,48,0,0,1,48-48h98.75a32,32,0,0,1,22.62,9.37L406.63,198.63A32,32,0,0,1,416,221.25Z'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <path d='M256,56V176a32,32,0,0,0,32,32H408'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <line x1='176' y1='288' x2='336' y2='288'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
        <line x1='176' y1='368' x2='336' y2='368'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"
              class="colored"/>
      </g>
      <g :class="{ 'hide': !isActive}">
        <path d='M428,224H288a48,48,0,0,1-48-48V36a4,4,0,0,0-4-4H144A64,64,0,0,0,80,96V416a64,64,0,0,0,64,64H368a64,64,0,0,0,64-64V228A4,4,0,0,0,428,224ZM336,384H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Zm0-80H176a16,16,0,0,1,0-32H336a16,16,0,0,1,0,32Z'
              class="colored--active" style="stroke: none;"/>
        <path d='M419.22,188.59,275.41,44.78A2,2,0,0,0,272,46.19V176a16,16,0,0,0,16,16H417.81A2,2,0,0,0,419.22,188.59Z'
              class="colored--active" style="stroke: none;"/>
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
