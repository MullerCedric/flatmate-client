<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 12 12"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path fill="none" stroke-width="1.75" stroke-linecap="round" d="M9,11L3,6l6-5"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcBack",
        props: {
            iconName: {
                type: String,
                default: 'back'
            },
            width: {
                type: [Number, String],
                default: 12
            },
            height: {
                type: [Number, String],
                default: 12
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
