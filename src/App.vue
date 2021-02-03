<template>
    <div id="app">
        <DataTable2 :list2="list2"/>
        <DataTable :list="list"/>
        <CountryGrid :list="list"/>
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
    import DataTable2 from "@/components/DataTable2";
    import CountryGrid from "@/components/CountryGrid";
    import DataTable from "@/components/DataTable";

    //scripts
    import {dataTableService} from "@/services/dataTableService";

    //use
    Vue.use(VueGoodTablePlugin);
    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable2,
            DataTable,
            CountryGrid
        },
        data() {
            return {list: undefined, list2:undefined}
        },

        mounted() {
            Vue.axios.get('https://disease.sh/v3/covid-19/countries')
                .then((response) => {
                    this.list = response.data;
                    this.list2 = dataTableService(response.data);
                    console.log(dataTableService(response.data));
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

