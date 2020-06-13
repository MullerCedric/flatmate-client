<template>
  <fm-screen :toolbarProps="toolbarProps" :is-full-frame="true">
    <fm-flat-list>
    </fm-flat-list>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";
    import FmFlatList from "../../components/FmFlatList";

    export default {
        name: "ScFlats",
        components: {FmFlatList, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Colocations',
                    showBack: true,
                }
            }
        },
    }
</script>

<style scoped>

</style>
