<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor">
      <path d='M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z'
            :style="'fill:' + insideColor + ';'"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcBookmark",
        props: {
            iconName: {
                type: String,
                default: 'bookmark'
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
            insideColor: {
                type: String,
                default: 'none'
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
