<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 24 24"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`" :stroke="iconColor" fill="none">
      <path d="M13.5,23.5h-3l-.4-3.1v-.3L9.7,20l-.9-.3a3,3,0,0,1-.8-.4l-.3-.2-.3.2L4.9,21.2,2.8,19.1l1.9-2.5.2-.3L4.8,16c-.1-.3-.3-.5-.4-.8l-.3-.9L3.9,14H3.6L.5,13.6v-3l3.1-.4h.3L4,9.7l.3-.9A5.58,5.58,0,0,1,4.8,8L5,7.7l-.3-.3L2.8,4.9,4.9,2.8,7.4,4.7l.3.2L8,4.8c.3-.1.5-.3.8-.4A3.55,3.55,0,0,1,9.7,4l.3-.1V3.6L10.4.5h3l.4,3.1v.3l.5.1.9.3a3,3,0,0,1,.8.4l.3.2.3-.2,2.5-1.9,2.1,2.1L19.3,7.4l-.2.3.1.3c.1.3.3.5.4.8l.3.9.1.3h.3l3.1.4v3l-3.1.4H20v.5l-.3.9a3,3,0,0,1-.4.8l-.2.3.2.3,1.9,2.5-2.1,2.1-2.5-1.9-.3-.2-.3.1c-.3.1-.5.3-.8.4l-.9.3-.3.2v.3ZM12,8.4A3.6,3.6,0,1,0,15.6,12,3.59,3.59,0,0,0,12,8.4Z" stroke-width="1.75"/>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcSettings",
        props: {
            iconName: {
                type: String,
                default: 'settings'
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
