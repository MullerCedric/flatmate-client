<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 16 16"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <line x1="11" y1="11" x2="16" y2="16"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="fill:none;"/>
      <circle cx="7" cy="7" r="6"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="fill:none;"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcSearch",
        props: {
            iconName: {
                type: String,
                default: 'search'
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
