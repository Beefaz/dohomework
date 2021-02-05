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
            Sorry. No data available. Try later or refresh your page.
        </div>
    </section>
</template>


<script>
    export default {
        name: 'LatestDiseaseStatsSection',
        props: ['latestDiseaseStats', 'list'],
    };
</script>

<style scoped>
</style>


