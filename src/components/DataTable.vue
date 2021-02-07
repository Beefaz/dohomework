<template>
    <div>
        <div v-if="country!==undefined">
            <button v-on:click="country=undefined">return</button>
            <CountryStats v-bind:country="country"/>
        </div>
        <div v-else>
            <vue-good-table
                    :columns="list.columns"
                    :rows="list.rows"
                    :line-numbers="true"
                    :pagination-options="paginationOptions"
                    :search-options="{
    enabled: true,
    skipDiacritics: true,
    placeholder: 'Search this table',
    }">
                <div slot="emptystate">
                    No data
                </div>
                <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'country'">
                <!-- old a :href="'/'+props.formattedRow[props.column.field]">{{props.formattedRow[props.column.field]}}</a --->
                <label v-on:click="country = props.formattedRow[props.column.field]">{{props.formattedRow[props.column.field]}}</label>
                                </span>
                </template>
            </vue-good-table>
        </div>
    </div>
</template>


<script>
    import Vue from 'vue';
    import {dataTableAdapter} from "@/functions/dataTableAdapter";
    import CountryStats from "@/components/SingleCountryTab";

    export default {
        name: 'DataTable',
        components: {CountryStats},
        data() {
            const tablePagOpt = {
                enabled: true,
                mode: 'records',
                perPage: 10,
                position: 'top',
                perPageDropdown: [5, 10, 20, 30, 40, 50],
                dropdownAllowAll: false,
                setCurrentPage: 1,
                nextLabel: 'next',
                prevLabel: 'prev',
                rowsPerPageLabel: 'Rows per page',
                ofLabel: 'of',
                pageLabel: 'page',
                allLabel: 'All',
            };
            return {paginationOptions: tablePagOpt, list: {columns: [], rows: []}, country: undefined}
        },
        created() {
            Vue.axios.get('https://disease.sh/v3/covid-19/countries')
                .then((response) => {
                    this.list = dataTableAdapter(response.data);
                })
                .catch((error) => {
                    console.warn(error);
                })
        }
    };
</script>
<style scoped>
    label {
        text-decoration: underline;
    }
</style>


