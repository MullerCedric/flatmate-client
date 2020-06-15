<template>
  <div :class="['fm-avatar', 'fm-avatar--' + size]" @click="$emit('avatar-clicked')">
    <div class="fm-avatar__box">
      <div class="fm-avatar__box-center">
        <img :src="urlSrc" alt="avatar" class="fm-avatar__img">
      </div>
    </div>
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
                        'xs', 's', 'm', 'l', 'xl', 'wide'
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
            prependBase: {
                type: Boolean,
                default: true,
            },
        },
        computed: {
            urlSrc() {
                if (this.imgUrl && this.imgUrl.trim()) {
                    return this.prependBase ? process.env.VUE_APP_STORAGE_BASE + '/' + this.imgUrl
                        : this.imgUrl;
                } else {
                    return 'https://eu.ui-avatars.com/api/?name=' + encodeURI(this.userName) + '&size=240&background=F2A322&color=ffffff';
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-avatar {
    flex-shrink: 0;
    overflow: hidden;
    width: 2.5rem;
    height: auto;
    padding: 0;
    margin: .5rem;
    border-radius: 100%;
    box-shadow: 0 0 .125rem $shadow;
    background-color: $grey;

    &__box {
      height: 0;
      padding-top: 100%;
      position: relative;

      &-center {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    &__img {
      width: 100%;
      margin: 0;
      padding: 0;
      border: none;
      line-height: 1;
    }

    &--xs {
      width: 1rem;
      margin: .25rem;
    }

    &--s {
      width: 1.75rem;
      margin: .375rem;
    }

    &--l {
      width: 3.25rem;
      margin: .625rem;
    }

    &--xl {
      width: 5rem;
      margin: .75rem;
    }

    &--wide {
      width: 35%;
      min-width: 4rem;
      max-width: 15rem;
      line-height: .7;
      margin: .75rem;
    }
  }
</style>
