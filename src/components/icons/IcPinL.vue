<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor">
      <path d="M11.5,24l-1-9h-6l2-4h2V4L6,4C5.2,4,4.5,3.3,4.5,2.5S5.2,1,6,1h12 c0.8,0,1.5,0.7,1.5,1.5S18.8,4,18,4h-2.5v7h2l2,4h-6l-1,9H11.5z"
            style="stroke : none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcPinL",
        props: {
            iconName: {
                type: String,
                default: 'Pin large'
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
