<template>
    <b-col cols="12" lg="6">
        <div class="row">
            <!-- SORT : START -->
            <CompSort v-bind:orderBy="orderBy"
                    v-bind:orderDir="orderDir" 
                    v-on:handleSort="handleSort"
            />
            <!-- SORT : END -->

            <!-- SEARCH : START -->
            <CompSearch 
                v-bind:stringSearch="stringSearch" 
                v-on:handleSearchControl="handleSearchControl"
            />
            <!-- SEARCH : END -->
        </div>
    </b-col>
</template>
<script>
    import CompSort from './CompSort';
    import CompSearch from './ControlSearch';

    export default {
        name : 'comp-control',
        props : {
            stringSearch : { type : String, default : ''},
            orderBy : { type : String, default : 'name'},
            orderDir : { type : String, default : 'asc'}
        },
        components : {
            CompSort,
            CompSearch
        },
        data() {
            return {}
        },
        methods: {
            handleSearchControl(data)
            {
                this.$emit('handleSearchControl', data);
            },
            handleSort(data)
            {
                this.$emit('handleSort', data);
            }
        },
    }
</script>