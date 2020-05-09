<template>
  <fm-screen :toolbarProps="toolbarProps">
    <fm-calendar></fm-calendar>
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
                }
            }
        },
    }
</script>

<style scoped>

</style>
