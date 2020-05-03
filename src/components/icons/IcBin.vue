<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M18.5,6V20.4A1.73,1.73,0,0,1,16.6,22H7.3a1.79,1.79,0,0,1-1.9-1.6V6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
      <path d="M3,6H21" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"/>
      <path d="M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75"/>
      <line x1="9" y1="10.5" x2="9" y2="17.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
      <line x1="12" y1="10.5" x2="12" y2="17.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
      <line x1="15" y1="10.5" x2="15" y2="17.5" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"/>
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
