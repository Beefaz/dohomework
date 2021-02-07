<template>
    <div id="app">
        <LatestDiseaseStatsSection/>
        <DataTable/>
    </div>
</template>

<script>
    //libraries
    import Vue from 'vue';
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    import VueGoodTablePlugin from 'vue-good-table';
    import 'vue-good-table/dist/vue-good-table.css'

    //components
    import LatestDiseaseStatsSection from "@/components/LatestDiseaseStatsSection";
    import DataTable from "@/components/DataTable";

    //scripts

    //use
    Vue.use(VueGoodTablePlugin);
    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable,
            LatestDiseaseStatsSection,
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

