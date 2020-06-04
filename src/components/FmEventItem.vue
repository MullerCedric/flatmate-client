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
    margin-bottom: .5rem;
    display: flex;
    align-items: stretch;

    &:last-child {
      border: none;
    }

    &__time {
      font-size: .875rem;
      font-weight: $medium;
      width: 3rem;
      flex-basis: 3rem;
      flex-shrink: 0;
      align-self: center;
      line-height: 1.25;
      margin: .375rem;

      &-end {
        opacity: .6;
      }
    }

    &__cat-line {
      width: .1875rem;
      height: 100%;
      margin: 0 .5rem 0 0;
      flex-shrink: 0;
    }

    &__label {
      font-weight: $medium;
      flex-shrink: 1;
      align-self: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
