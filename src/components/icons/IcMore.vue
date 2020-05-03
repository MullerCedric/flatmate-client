<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 20 20"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" stroke="none" :fill="iconColor">
      <circle cx="18" cy="10" r="2"/>
      <circle cx="10" cy="10" r="2"/>
      <circle cx="2" cy="10" r="2"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcMore",
        props: {
            iconName: {
                type: String,
                default: 'more'
            },
            width: {
                type: [Number, String],
                default: 20
            },
            height: {
                type: [Number, String],
                default: 20
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
