<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M250,70l6,110,6-110a6,6,0,0,0-5.7-6H256a5.7,5.7,0,0,0-5.7,5.8C250.3,69.9,250,69.9,250,70Z" fill="none"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
      <path d="M383.3,120.2l-73.6,82.1,82.1-73.6a5.9,5.9,0,0,0,.1-8.3c0-.1-.1-.1-.1-.2h0a5.8,5.8,0,0,0-8.2.1Z"
            fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.9"/>
      <path d="M442,250l-110,6,110,6a6,6,0,0,0,6-5.7V256h0a5.7,5.7,0,0,0-5.8-5.7C442.1,250.3,442.1,250,442,250Z"
            fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.8"/>
      <path d="M391.8,383.3l-82.1-73.6,73.6,82.1a5.9,5.9,0,0,0,8.3.1h.2a5.8,5.8,0,0,0-.1-8.2Z" fill="none"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.7"/>
      <path d="M262,442l-6-110-6,110a6,6,0,0,0,5.7,6h.3a5.7,5.7,0,0,0,5.7-5.8C261.7,442.1,262,442.1,262,442Z"
            fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.6"/>
      <path d="M128.7,391.8l73.6-82.1-82.1,73.6a5.9,5.9,0,0,0-.1,8.3c0,.1.1.1.1.2h0a5.8,5.8,0,0,0,8.2-.1Z" fill="none"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.5"/>
      <path d="M70,262l110-6L70,250a6,6,0,0,0-6,5.7v.3h0a5.7,5.7,0,0,0,5.8,5.7C69.9,261.7,69.9,262,70,262Z"
            fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.4"/>
      <path d="M120.2,128.7l82.1,73.6-73.6-82.1a5.9,5.9,0,0,0-8.3-.1h-.2a5.8,5.8,0,0,0,.1,8.2Z" fill="none"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" opacity="0.3"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcLoading",
        props: {
            iconName: {
                type: String,
                default: 'loading'
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

<style lang="scss" scoped>
  @import "../../assets/scss/animations";

  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px;
    animation: spin 2s linear infinite;
  }
</style>
