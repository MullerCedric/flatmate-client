<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor">
      <path d='M376,144c-3.92,52.87-44,96-88,96s-84.15-43.12-88-96c-4-55,35-96,88-96S380,90,376,144Z' style='fill:none;'
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M288,304c-87,0-175.3,48-191.64,138.6-2,10.92,4.21,21.4,15.65,21.4H464c11.44,0,17.62-10.48,15.65-21.4C463.3,352,375,304,288,304Z'
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32" style='fill:none;'/>
      <g :class="{'hide': !(withSign === 'plus' || withSign === 'minus')}">
        <line x1='88' y1='176' x2='88' y2='288' style='fill:none;' :class="{'hide': withSign !== 'plus'}"
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
        <line x1='144' y1='232' x2='32' y2='232' style='fill:none;'
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcPerson",
        props: {
            iconName: {
                type: String,
                default: 'person'
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
            withSign: {
                type: String,
            },
        }
    }
</script>

<style lang="scss" scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
  }

  .hide {
    opacity: 0;
  }
</style>
