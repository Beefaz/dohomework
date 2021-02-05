<template>
    <div>
    <div v-if="latestDiseaseStats!==undefined">
        <section>
            <div><h1>Latest Coronavirus Statistics</h1></div>
            <div>
                <h2>Cases: {{latestDiseaseStats.cases}}</h2>
                <h2>Deaths: {{latestDiseaseStats.deaths}}</h2>
                <h2>Recovered: {{latestDiseaseStats.recovered}}</h2>
            </div>
        </section>
    </div>
    </div>
</template>


<script>
    export default {
        name: 'LatestDiseaseStatsSection',
        props: ['latestDiseaseStats', 'list'],
    };
</script>

<style scoped>
</style>


