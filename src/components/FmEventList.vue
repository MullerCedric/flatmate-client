<template>
  <section class="fm-event-list">
    <h2 class="fm-event-list__title">{{ title }}</h2>
    <div class="fm-event-list__list" :class="{ 'fm-event-list__list--empty': !events.length }">
      <p v-if="!events.length">Aucun événement prévu</p>
      <fm-event-item v-for="event in sortedEvents" :key="event.id" :event="event">
      </fm-event-item>
    </div>
  </section>
</template>

<script>
    import FmEventItem from "./FmEventItem";

    export default {
        name: "FmEventList",
        components: {FmEventItem},
        props: {
            gap: {
                type: String,
            },
            events: {
                type: Array,
                default: () => [],
            }
        },
        computed: {
            title() {
                return this.gap ? 'Prévu ' + this.gap : 'Chargement';
            },
            sortedEvents() {
                let sorted = this.events;
                return sorted.sort((a, b) => {
                    if (a.start_date.getHours() !== b.start_date.getHours()) {
                        return a.start_date.getHours() - b.start_date.getHours();
                    }
                    return a.start_date.getMinutes() - b.start_date.getMinutes(); //TODO check also for interval of not exactly 1 day
                });
            }
        },
    }
</script>

<style lang="scss" scoped>
  .fm-event-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 4rem;
    margin: 0 0 -1.5rem 0;

    &__list {
      flex: 1;
      overflow-y: auto;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom: 1.5rem;

      &--empty {
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }

    &__title {
      margin-top: 0;
    }
  }
</style>
