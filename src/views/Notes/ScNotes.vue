<template>
  <fm-screen :toolbarProps="toolbarProps">
    <p>Soon</p>

    <template #tab>
      <fm-tab-bar>
      </fm-tab-bar>
    </template>
  </fm-screen>
</template>

<script>
    import * as types from "../../store/types";

    import FmScreen from "../../components/FmScreen";
    import FmTabBar from "../../components/FmTabBar";

    export default {
        name: "ScNotes",
        components: {FmTabBar, FmScreen},
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
        mounted() {
            this.$store.dispatch(types.HYDRATE_APP);
        },
    }
</script>

<style scoped>

</style>
