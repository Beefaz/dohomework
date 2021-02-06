<template>
    <div id="app">
        <LatestDiseaseStatsSection :latest-disease-stats="latestDiseaseStats"/>
        <DataTable :list="list"/>
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
    import {dataTableAdapter} from "@/functions/dataTableAdapter";
    import {latestDataAdapter} from "@/functions/latestDataAdapter";

    //use
    Vue.use(VueGoodTablePlugin);
    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable,
            LatestDiseaseStatsSection,
        },
        data() {
            return {list: undefined, latestDiseaseStats: undefined}
        },
        async mounted() {
            await Vue.axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=10')
                .then((response) => {
                    this.latestDiseaseStats = latestDataAdapter(response.data);
                })
                .catch((error) => {
                    console.warn(error);
                });
            await Vue.axios.get('https://disease.sh/v3/covid-19/countries')
                .then((response) => {
                    this.list = dataTableAdapter(response.data);
                })
                .catch((error) => {
                    console.warn(error);
                })
        }
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

