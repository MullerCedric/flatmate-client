<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor">
      <polyline points='320 120 368 168 320 216' style="fill:none;"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M352,168H144a80.24,80.24,0,0,0-80,80v16' style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <polyline points='192 392 144 344 192 296' style="fill:none;"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M160,344H368a80.24,80.24,0,0,0,80-80V248' style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"
      />
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcRepeat",
        props: {
            iconName: {
                type: String,
                default: 'repeat'
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
        }
    }
</script>

<style lang="scss" scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
  }
</style>
