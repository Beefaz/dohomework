<template>
    <section>
        <div>
            <h1>Latest Coronavirus Statistics</h1>
        </div>
        <div v-if="latestDiseaseStats!==undefined">
            <h2>Cases: {{latestDiseaseStats.cases}}</h2>
            <h2>Deaths: {{latestDiseaseStats.deaths}}</h2>
            <h2>Recovered: {{latestDiseaseStats.recovered}}</h2>
        </div>
        <div v-else>
            Loading...
        </div>
    </section>
</template>


<script>
    import Vue from 'vue';
    import {latestDataAdapter} from "@/functions/latestDataAdapter";

    export default {
        name: 'LatestDiseaseStatsSection',

        data() {
            return {latestDiseaseStats: undefined}
        },
        mounted() {
            Vue.axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=10')
                .then((response) => {
                    this.latestDiseaseStats = latestDataAdapter(response.data);
                })
                .catch((error) => {
                    console.warn(error);
                });

        }
    };
</script>

<style scoped>
</style>


