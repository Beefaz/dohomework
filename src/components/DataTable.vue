<template>
    <table v-if="list!==undefined">
        <tr>
            <th v-for="header in Object.getOwnPropertyNames(list[0])" v-bind:key="header.index">
                {{header}}
            </th>
        </tr>
        <tr v-for="row in list" v-bind:key="row.index">
            <td v-for="column in row" v-bind:key="column.index">
                {{column}}
            </td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'DataTable',
        props: ['list'],
        components:'',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


