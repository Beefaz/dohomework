<template>
    <vue-good-table v-if="list!==undefined"
                    v-bind:columns="list.columns"
                    v-bind:rows="list.rows"
                    :line-numbers="true"
                    :pagination-options="paginationOptions"
                    :search-options="{
    enabled: true,
    skipDiacritics: true,
    placeholder: 'Search this table',
    }">
        <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'country'">
                                    <a :href="'/'+props.formattedRow[props.column.field]">{{props.formattedRow[props.column.field]}}</a>
                                </span>
        </template>
    </vue-good-table>
    <div v-else>
        Sorry, no data available yet. Refresh your page or try again later.
    </div>
</template>


<script>
    export default {
        name: 'DataTable',
        props: ['list'],
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
            return {paginationOptions: tablePagOpt}
        },
    };
</script>
<style scoped>
</style>


