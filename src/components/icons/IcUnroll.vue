<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 12 12"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path stroke-width="2" d="M3,4.5l3,3l3-3"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcUnroll",
        props: {
            iconName: {
                type: String,
                default: 'unroll'
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
