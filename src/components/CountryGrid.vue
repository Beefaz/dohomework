<template>
    <div v-if="list!==undefined">
        <div>SELECT YOUR COUNTRY</div>
        <div class="countryGrid">
        <div class="countryContainer" v-for="entry in list" v-bind:key="entry.index">
            <img :src=entry.countryInfo.flag alt="">
            <div>{{entry.country}}</div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CountryGrid',
        props: ['list'],
        components:'',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .countryGrid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap
    }
</style>


