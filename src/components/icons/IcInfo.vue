<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 512 512"
       :aria-labelledby="iconName"
       role="img" class="icon">
    <title :id="iconName">{{ iconName }} icon</title>
    <g :id="`ic-${iconName}`">
      <g :class="{ 'hide': isActive }">
        <path d='M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z'
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"
              style="fill:none;" class="colored" :class="{ 'colored--has-error': hasError }"/>
        <polyline points='220 220 252 220 252 336'
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  style="fill:none;" class="colored" :class="{ 'colored--has-error': hasError }"/>
        <line x1='208' y1='340' x2='296' y2='340'
              stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="32"
              style="fill:none;" class="colored" :class="{ 'colored--has-error': hasError }"/>
        <path d='M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z'
              stroke-linecap="round" stroke-linejoin="round" stroke-width="32" style="stroke:none;"
              class="colored" :class="{ 'colored--has-error': hasError }"/>
      </g>
      <g :class="{ 'hide': !isActive }">
        <path d='M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z'
              class="colored--active" :class="{ 'colored--has-error': hasError }" style="stroke: none;"/>
      </g>
    </g>
  </svg>
</template>

<script>
    export default {
        name: "IcInfo",
        props: {
            iconName: {
                type: String,
                default: 'information'
            },
            width: {
                type: [Number, String],
                default: 24
            },
            height: {
                type: [Number, String],
                default: 24
            },
            isActive: {
                type: Boolean,
                default: false,
            },
            hasError: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings.scss";

  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -3px;
  }

  .hide {
    opacity: 0;
  }

  .colored {
    stroke: $black;
    fill: $black;

    &--has-error {
      stroke: $danger;
      fill: $danger;
    }
  }
</style>
