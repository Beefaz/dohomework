<template>
    <div id="app">
        <DataTable :list="list"/>
    </div>
</template>

<script>
    import DataTable from './components/DataTable.vue'
    import Vue from 'vue';
    import axios from 'axios';
    import VueAxios from 'vue-axios';

    Vue.use(VueAxios, axios);

    export default {
        name: 'App',
        components: {
            DataTable
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

