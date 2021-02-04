<template>
    <div id="app">
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
    import DataTable from "@/components/DataTable";

    //scripts
    import {dataTableService} from "@/services/dataTableService";

    //use
    Vue.use(VueGoodTablePlugin);
    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable,
        },
        data() {
            return {list: undefined}
        },
        mounted() {
            Vue.axios.get('https://disease.sh/v3/covid-19/countries')
                .then((response) => {
                    console.log(response);
                    this.list = dataTableService(response.data);
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

