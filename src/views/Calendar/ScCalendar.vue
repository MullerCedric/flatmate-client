<template>
  <fm-screen :toolbarProps="toolbarProps">
    <div class="screen">
      <fm-calendar @selectedDateChange="calendarSelectedChange"
                   @visibleDatesChange="calendarVisibleChange"
                   :events="calendarEventsData" class="calendar">
      </fm-calendar>
      <fm-event-list :gap="calendarSelectedData.gapBetweenDays"
                     :events="eventsForSelectedDay" class="event-list">
      </fm-event-list>
    </div>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmCalendar from "../../components/FmCalendar";
    import FmEventList from "../../components/FmEventList";

    export default {
        name: "ScCalendar",
        components: {FmEventList, FmCalendar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Calendrier',
                    type: 'calendar',
                    showMore: true,
                },
                calendarSelectedData: {},
                calendarVisibleDates: {},
            }
        },
        computed: {
            calendarEventsData() {
                return this.$store.getters[types.GET_EVENTS_FOR_TMSTPM](this.calendarVisibleDates.from);
            },
            eventsForSelectedDay() {
                if (!this.calendarSelectedData.selectedDate) return [];
                return this.calendarEventsData[this.calendarSelectedData.selectedDate.getTime()] || [];
            },
        },
        methods: {
            calendarSelectedChange(event) {
                this.calendarSelectedData = event;
            },
            calendarVisibleChange(event) {
                this.calendarVisibleDates = event;
                this.$store.dispatch(types.FETCH_AND_ASSOCIATE_EVENTS, this.calendarVisibleDates);
            },
        }
    }
</script>

<style lang="scss" scoped>
  .screen {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .event-list {
    flex: 1;
    overflow-y: auto;
  }
</style>
