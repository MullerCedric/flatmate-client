<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 16 16"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <line x1="8" y1="16" x2="8" stroke-linecap="round" stroke-width="3"/>
      <line y1="8" x2="16" y2="8" stroke-linecap="round" stroke-width="3"/>
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
                default: 16
            },
            height: {
                type: [Number, String],
                default: 16
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
