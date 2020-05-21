<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d='M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <polyline points='336 64 448 64 448 176'
                stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
      <line x1='224' y1='288' x2='440' y2='72'
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="fill:none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcOpen",
        props: {
            iconName: {
                type: String,
                default: 'open'
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
