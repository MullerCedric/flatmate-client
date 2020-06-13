<template>
  <fm-screen :toolbarProps="toolbarProps">
    <div class="screen">
      <fm-calendar @selectedDateChange="calendarSelectedChange"
                   @visibleDatesChange="calendarVisibleChange"
                   :events="calendarEventsData" class="calendar">
      </fm-calendar>
      <fm-event-list :gap="calendarSelectedData.gapBetweenDays" :selected-iso-string="selectedIsoString"
                     :events="eventsForSelectedDay" class="event-list">
      </fm-event-list>
    </div>

    <template #tab>
      <fm-tab-bar :create-link="{name: 'eventsCreate', query: { selectedDate: selectedIsoString } }">
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmTabBar from "../../components/FmTabBar";
    import FmCalendar from "../../components/FmCalendar";
    import FmEventList from "../../components/FmEventList";

    export default {
        name: "ScEventsCalendar",
        components: {FmTabBar, FmEventList, FmCalendar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Calendrier',
                    showAvatar: true,
                    showMore: true,
                    showBubble: true,
                },
                calendarSelectedData: {},
                calendarVisibleDates: {},
                selectedIsoString: '',
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
        updated() {
            this.updateSelectedIso();
        },
        methods: {
            calendarSelectedChange(event) {
                this.calendarSelectedData = event;
            },
            calendarVisibleChange(event) {
                this.calendarVisibleDates = event;
                this.$store.dispatch(types.FETCH_AND_ASSOCIATE_EVENTS, this.calendarVisibleDates);
            },
            updateSelectedIso() {
                let newDate = !this.calendarSelectedData.selectedDate ?
                    new Date() :
                    new Date(this.calendarSelectedData.selectedDate.getTime());
                const tzOffset = newDate.getTimezoneOffset() / 60;
                newDate.setHours(9 - tzOffset, 0, 0);
                this.selectedIsoString = newDate.toISOString().slice(0, 16);
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
