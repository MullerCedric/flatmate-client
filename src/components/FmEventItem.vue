<template>
  <div class="fm-event-item">
    <div class="fm-event-item__time">
      <div class="fm-event-item__time-start">{{ start_time }}</div>
      <div v-if="event.duration" class="fm-event-item__time-end">{{ end_time }}</div>
    </div>
    <div class="fm-event-item__cat-line" :style="'background-color:' + this.category_color"></div>
    <div class="fm-event-item__label">
      {{ event.label }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "FmEventItem",
        props: {
            event: {
                type: Object,
                required: true,
            }
        },
        computed: {
            start_time() {
                const hours = this.normalize_time(this.event.start_date.getHours());
                const minutes = this.normalize_time(this.event.start_date.getMinutes());
                return hours + 'h' + minutes;
            },
            end_time() {
                if (!this.event.duration) return '/';
                let resultTimestamp = this.event.start_date.getTime(),
                    result = new Date(resultTimestamp + this.event.duration);
                const hours = this.normalize_time(result.getHours());
                const minutes = this.normalize_time(result.getMinutes());
                return hours + 'h' + minutes; //TODO handle events for more than 1 day
            },
            category_color() {
                let cat = this.event.category;
                if (!cat) return '#4a4750';
                return cat.color;
            },
        },
        methods: {
            normalize_time(time) {
                return time >= 10 ? time : '0' + time;
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/settings";

  .fm-event-item {
    padding: .25rem;
    margin-bottom: .25rem;
    border-bottom: 1px solid lightgrey;
    display: flex;

    &:last-child {
      border: none;
    }

    &__time {
      font-size: .875rem;
      flex-basis: 3.5rem;
      flex-shrink: 0;
      text-align: right;

      &-start {
        font-weight: $medium;
      }

      &-end {
        opacity: .9;
      }
    }

    &__cat-line {
      width: .1875rem;
      height: 100%;
      margin: 0 .5rem;
      flex-shrink: 0;
    }

    &__label {
      font-weight: $medium;
      flex-shrink: 1;
    }
  }
</style>
