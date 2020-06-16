<template>
  <fm-screen :toolbarProps="toolbarProps" :is-full-frame="true">
    <fm-flat-list>
    </fm-flat-list>
  </fm-screen>
</template>

<script>
    import FmScreen from "../../components/FmScreen";
    import FmFlatList from "../../components/FmFlatList";
    import * as types from "../../store/types";

    export default {
        name: "ScFlats",
        components: {FmFlatList, FmScreen},
        data() {
            return {
                toolbarProps: {
                    title: 'Colocations',
                    showBack: false,
                },
            }
        },
        computed: {
            flats() {
                return this.$store.getters[types.GET_FLATS];
            },
            currFlat() {
                return this.$store.getters[types.GET_FLAT];
            },
            currFlatId() {
                return this.currFlat.id;
            },
            hasFlats() {
                return !!(this.flats.length >= 1 && this.currFlatId);
            },
            toolbarValues() {
                return this.hasFlats ? {
                    title: 'Colocations',
                    showBack: true,
                } : {
                    title: 'Colocations',
                    showAvatar: true,
                    showSettings: true,
                    showMore: true,
                };
            },
        },
        mounted() {
            this.toolbarProps = this.toolbarValues;
        },
        updated() {
            this.toolbarProps = this.toolbarValues;
        }
    }
</script>

<style scoped>

</style>
