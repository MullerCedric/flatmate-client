<template>
  <section class="fm-expandable">
    <h2 @click="isOpen = !isOpen">
      {{ heading }}
      <ic-unroll class="fm-expandable__unroll"
                 :class="{'fm-expandable__unroll--opened': isOpen}"></ic-unroll>
    </h2>
    <div v-if="isOpen">
      <slot>Contenu</slot>
    </div>
  </section>
</template>

<script>
    import IcUnroll from "./icons/IcUnroll";

    export default {
        name: "FmExpandable",
        components: {IcUnroll},
        props: {
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
            }
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
  .fm-expandable {
    &__unroll {
      transition: transform .3s ease-in-out;

      &--opened {
        transform: rotate(-90deg);
      }
    }
  }
</style>
