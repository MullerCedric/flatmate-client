<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor">
      <line x1='256' y1='112' x2='256' y2='400'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="40" style="fill:none;"/>
      <line x1='400' y1='256' x2='112' y2='256'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="40" style="fill:none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcPlus",
        props: {
            iconName: {
                type: String,
                default: 'plus'
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
