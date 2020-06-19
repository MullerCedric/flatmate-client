<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 12 12"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor" transform="translate(-290 -56)">
      <rect x="294" y="56" width="4" height="7" style="stroke: none;"/>
      <line x1="296" y1="68" x2="296" y2="59" style="fill: none;"/>
      <path d="M293,62h6l1,2h-8L293,62z" style="stroke: none;"/>
      <rect x="292" y="56" width="8" height="1" style="stroke: none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcPinS",
        props: {
            iconName: {
                type: String,
                default: 'Pin small'
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
