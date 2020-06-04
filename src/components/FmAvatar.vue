<template>
  <div :class="['fm-avatar', 'fm-avatar--' + size]">
    <img :src="urlSrc" alt="avatar">
  </div>
</template>

<script>
    export default {
        name: "FmAvatar",
        props: {
            size: {
                type: String,
                default: 'm',
                validator: (val) => {
                    return [
                        'xs', 's', 'm', 'l', 'xl'
                    ].indexOf(val) !== -1;
                },
            },
            imgUrl: {
                type: String,
            },
            userName: {
                type: String,
                default: 'undefined',
            },
        },
        computed: {
            urlSrc() {
                return this.imgUrl || 'https://api.adorable.io/avatars/160/' + encodeURI(this.userName) + '.png';
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-avatar {
    flex-shrink: 0;
    width: 2.5rem;
    height: 2.5rem;
    overflow: hidden;
    text-align: center;
    padding: 0;
    margin: .5rem;
    border-radius: 100%;
    box-shadow: 0 0 .125rem $shadow;
    background-color: $grey;

    & img {
      max-width: 100%;
      margin: 0;
      padding: 0;
      border: none;
    }

    &--xs {
      width: 1rem;
      height: 1rem;
      margin: .25rem;
    }

    &--s {
      width: 1.75rem;
      height: 1.75rem;
      margin: .375rem;
    }

    &--l {
      width: 3rem;
      height: 3rem;
      margin: .625rem;
    }

    &--xl {
      width: 5rem;
      height: 5rem;
      margin: .75rem;
    }
  }
</style>
