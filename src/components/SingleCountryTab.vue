<template>
    <div v-if="countryStats!==undefined">
        <div>
            <button v-on:click=fetchData>
                <span v-if="btnUpdated===undefined">Update data</span>
                <span v-else>Updated!</span>
            </button>
        </div>
        <img v-bind:src='countryFlag' alt="">
        <div v-for="item in Object.entries(countryStats)" :key="item.index">
            <div v-if="item[0]!=='countryInfo'">{{item[0]}}: {{item[1]}}</div>
        </div>
    </div>
</template>

<script>
    //libraries
    import Vue from 'vue';
    import axios from 'axios';
    import VueAxios from 'vue-axios';
    import 'vue-good-table/dist/vue-good-table.css'


    Vue.use(VueAxios, axios);

    export default {
        name: 'SingleCountryTab',
        props: ['country'],
        data() {
            return {countryStats: undefined, countryFlag: undefined, btnUpdated: undefined}
        },
        updated() {
            if (localStorage.getItem(this.country)) {
                try {
                    [this.countryStats, this.countryFlag] = JSON.parse(localStorage.getItem(this.country));
                } catch (e) {
                    console.log(e);
                }
            } else this.fetchData();
        },
        methods: {
            fetchData() {
                Vue.axios.get('https://disease.sh/v3/covid-19/countries/' + this.country + '?strict=true')
                    .then((response) => {
                        this.btnUpdated = true;
                        [this.countryStats, this.countryFlag] = [response.data, response.data['countryInfo']['flag']];
                        localStorage.removeItem(this.country);
                        localStorage.setItem(this.country, JSON.stringify([this.countryStats, this.countryFlag]));
                    })
                    .catch((error) => {
                        console.warn(error);
                    });
            }
        },
    }
</script>

<style scoped>
</style>

