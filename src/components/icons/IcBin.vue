<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d='M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <line x1='80' y1='112' x2='432' y2='112'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;" stroke-miterlimit="10"/>
      <path d='M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <line x1='256' y1='176' x2='256' y2='400'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <line x1='184' y1='176' x2='192' y2='400'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <line x1='328' y1='176' x2='320' y2='400'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcBin",
        props: {
            iconName: {
                type: String,
                default: 'bin'
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
            }
        }
    }
</script>

<style scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
  }
</style>
