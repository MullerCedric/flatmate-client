<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none" :class="{'ic-back--left-offset': leftOffset}">
      <polyline points='328 112 184 256 328 400'
                stroke-linecap="round" stroke-linejoin="round" :stroke-width="strokeWidth" style="fill:none;"/>
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
            strokeWidth: {
                type: Number,
                default: 32,
            },
            leftOffset: {
                type: Boolean,
                default: false,
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

  .ic-back--left-offset {
    transform: translateX(-5%);
  }
</style>
