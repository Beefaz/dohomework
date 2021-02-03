<template>
    <div id="app">
        <DataTable :list="list"/>
        <CountryGrid :list="list"/>
    </div>
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    import DataTable from "@/components/DataTable";
    import CountryGrid from "@/components/CountryGrid";

    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable,
            CountryGrid
        },
        data() {
            return {list: undefined}
        },

        async mounted() {
            Vue.axios.get('https://disease.sh/v3/covid-19/countries')
                .then((response) => {
                    this.list = response.data;
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

