<template>
  <fm-screen :toolbarProps="toolbarProps">
    <fm-calendar @calendarChange="calendarChange"></fm-calendar>
    <section>
      <h2>Prévu {{ calendarData.gapBetweenDays }}</h2>
    </section>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";
    import FmCalendar from "../../components/FmCalendar";

    export default {
        name: "ScCalendar",
        components: {FmCalendar, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Calendrier',
                    type: 'calendar',
                    showMore: true,
                },
                calendarData: {},
            }
        },
        methods: {
            calendarChange(event) {
                this.calendarData = event;
            },
        }
    }
</script>

<style scoped>

</style>
