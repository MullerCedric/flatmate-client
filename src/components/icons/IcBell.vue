<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M21,19H3l2.5-4.5v-6a6.76,6.76,0,0,1,1.3-3.9,6.43,6.43,0,0,1,3.3-2.3l.4-.1-.1-.4v-.2a1.5,1.5,0,0,1,3,0v.2l-.1.4.4.1A6.43,6.43,0,0,1,17,4.57a6.12,6.12,0,0,1,1.3,3.9v6Z" stroke-width="1.75"/>
      <path d="M12,24a3.1,3.1,0,0,1-3-2.5h6A2.93,2.93,0,0,1,12,24Z" stroke-width="1.25"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcBell",
        props: {
            iconName: {
                type: String,
                default: 'bell'
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
