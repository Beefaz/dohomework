<template>
    <div v-if="list!==undefined">
        <vue-good-table
                v-bind:columns="list.columns"
                v-bind:rows="list.rows"
                :line-numbers="true"
                v-bind:max-height="maxHeight"
                @on-row-click="onRowClick">
            <!-- headeriui reikia sticky param.-->
            <!-- :row-style-class="rowStyle" - kaip uzmest stiliu ant subklases be external css? selectoriai neima. Props? -->
            <div slot="table-actions">
                <label>
                    <input placeholder="Type in"/>
                </label>
                <button>Search</button>
            </div>
            <div slot="emptystate">
                No data found
            </div>
        </vue-good-table>
    </div>
</template>


<script>
    export default {
        name: 'DataTable',
        props: ['list'],
        methods: {
            onRowClick() {
                // params.row - row object
                // params.pageIndex - index of this row on the current page.
                // params.selected - if selection is enabled this argument
                // indicates selected or not
                // params.event - click event
                return null;
            },
        },
        data(){
            return {maxHeight: undefined}
        },
        mounted() {
            this.maxHeight = (window.screen.height/3*2).toString().concat('px');
        }
    };
</script>

<style scoped>
</style>


