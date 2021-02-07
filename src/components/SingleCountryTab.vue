<template>
    <div v-if="countryStats!==undefined">
        <img v-bind:src=countryFlag alt="">
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
            return {countryStats: undefined, countryFlag: undefined}
        },
        created() {
            Vue.axios.get('https://disease.sh/v3/covid-19/countries/' + this.country + '?strict=true')
                .then((response) => {
                    this.countryFlag = response.data['countryInfo']['flag'];
                    this.countryStats = response.data;
                })
                .catch((error) => {
                    console.warn(error);
                });

        }
    }
</script>

<style scoped>
    button {
        margin: 10px;
    }
</style>

