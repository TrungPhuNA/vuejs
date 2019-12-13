<template>
    <div class="col-12">
        <div class="input-group">
            <input type="text" v-bind:value="stringSearch"
            v-on:input="handleSearch"
            v-on:handleSearch="handleSearch"
             class="form-control" placeholder="Search for..." />
            <span class="input-group-append">
                <button class="btn btn-info" v-on:click="handleClear" type="button">Clear!</button>
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'comp-search',
        props : {
            stringSearch : { type : String , default : ''}
        },
        data() {
            return {}
        },
    
        methods: {
            handleSearch(event) {
                console.log("Search");
                this.$emit('handleSearchControl', event.target.value)
            },
            handleClear()
            {
                this.$emit('handleSearchControl', '')
            }
        },
    }
</script>