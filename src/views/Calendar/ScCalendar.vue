<template>
  <fm-screen :toolbarProps="toolbarProps">
    <p>Soon</p>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";

    export default {
        name: "ScCalendar",
        components: {FmScreen},
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
