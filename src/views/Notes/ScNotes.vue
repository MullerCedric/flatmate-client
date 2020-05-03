<template>
  <fm-screen :toolbarProps="toolbarProps">
    <p>Soon</p>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";

    export default {
        name: "ScNotes",
        components: {FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Notes',
                    type: 'notes',
                    showSearch: true,
                    showMore: true,
                }
            }
        },
    }
</script>

<style scoped>

</style>
