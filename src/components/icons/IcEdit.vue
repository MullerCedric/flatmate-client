<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M403,63.7l-333,333C57.6,409.1,48,464,48,464s54.4-9.1,67.3-22l333-333" style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d="M115.3,442c0,0-26.5,17.3-44.6-0.7S70,396.7,70,396.7" style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <path d="M445.9,111.2l-45-45l10.1-10.1c12.1-12.1,31.7-12.1,43.8,0l1.3,1.3c12.1,12.1,12.1,31.7,0,43.8L445.9,111.2z"
            style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
      <line x1="178.3" y1="464" x2="448.3" y2="464" style="fill:none;"
            stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcEdit",
        props: {
            iconName: {
                type: String,
                default: 'edit'
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
