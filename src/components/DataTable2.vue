<template>
    <div v-if="list2!==undefined">
        <vue-good-table
                v-bind:columns="list2.columns"
                v-bind:rows="list2.rows"/>
    </div>
</template>

<script>
    export default {
        name: 'DataTable2',
        props: ['list2'],
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


