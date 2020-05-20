<template>
  <div class="fm-fi-tag">
    <div v-for="tag in tags" :key="tag" class="fm-fi-tag__tag">
      {{ tag }}
      <div class="fm-fi-tag__del" @click="removeTag(tag)">&times;</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FmFormInputTag",
        props: {
            tags: {
                type: Array,
                validator: (arr) => {
                    return arr.every(val => {
                        return typeof val === 'string';
                    });
                },
            },
        },
        methods: {
            removeTag(tag) {
                const index = this.tags.indexOf(tag);
                if (index === -1) return;
                const newTags = [...this.tags];
                newTags.splice(index, 1);
                this.$emit('update:tags', newTags);
            },
        },
    }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/settings";

  .fm-fi-tag {

    &__tag {
      display: inline-flex;
      align-items: center;
      padding: .125rem .25rem;
      margin-right: .375rem;
      margin-bottom: .5rem;
      border: 1px solid $grey;
      border-radius: .5rem;
      background-color: $lightGrey;
    }

    &__del {
      display: flex;
      align-items: center;
      align-self: center;
      justify-content: center;
      height: 1rem;
      width: 1rem;
      border-radius: 1rem;
      margin-left: .25rem;
      background-color: $lighterGrey;
    }
  }
</style>
