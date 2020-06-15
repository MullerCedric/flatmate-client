<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" :fill="iconColor">
      <ellipse cx='256' cy='128' rx='192' ry='80' style="fill:none;"
               stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M448,214c0,44.18-86,80-192,80S64,258.18,64,214' style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M448,300c0,44.18-86,80-192,80S64,344.18,64,300' style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d='M64,127.24V384.76C64,428.52,150,464,256,464s192-35.48,192-79.24V127.24' style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcDatabase",
        props: {
            iconName: {
                type: String,
                default: 'database'
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
