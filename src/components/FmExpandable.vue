<template>
  <component :is="tag" class="fm-expandable">
    <component :is="tag === 'section' ? 'h2' : 'div'" @click="isOpen = !isOpen" class="fm-expandable__heading">
      {{ heading }}
      <ic-unroll class="fm-expandable__unroll"
                 :class="{'fm-expandable__unroll--opened': isOpen}">
      </ic-unroll>
    </component>
    <div v-if="isOpen" class="fm-expandable__content"
         :style="{borderLeftColor: stripColor, borderLeftWidth: showStrip ? '.25rem' : '0', paddingLeft: showStrip ? '.25rem' : '0'}">
      <slot>Contenu</slot>
    </div>
  </component>
</template>

<script>
    import IcUnroll from "./icons/IcUnroll";

    export default {
        name: "FmExpandable",
        components: {IcUnroll},
        props: {
            tag: {
                type: String,
                default: 'section',
            },
            title: {
                type: String,
            },
            titles: {
                type: Object,
                default() {
                    return {
                        openTitle: "Afficher plus",
                        closeTitle: "Afficher moins",
                    }
                }
            },
            showStrip: {
                type: Boolean,
                default: true,
            },
            stripColor: {
                type: String,
                default: 'rgba(118, 115, 135, 1)',
            },
        },
        data() {
            return {
                isOpen: false,
            }
        },
        computed: {
            heading() {
                if (this.title) return this.title;
                if (this.isOpen) {
                    return this.titles.closeTitle;
                } else {
                    return this.titles.openTitle;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-expandable {
    &__unroll {
      transition: transform .3s ease-in-out;

      &--opened {
        transform: rotate(180deg);
      }
    }

    &__content {
      border-left-style: solid;
      padding: .25rem 0;
    }
  }

  div.fm-expandable__heading {
    margin: .5rem 0 .25rem;
    background-color: $lightGrey;
    border-radius: .5rem;
    padding: .25rem .5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
