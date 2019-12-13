<template>
    <div class="col-12">
        <div class="form-group">
            <div class="dropdown">
                <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by
                </button>
                <div> -->
                <b-dropdown  text="Sort By">
                    <b-dropdown-item v-on:click="handleSort('name', 'asc')">Name ASC</b-dropdown-item>
                    <b-dropdown-item v-on:click="handleSort('name', 'desc')">Name DESC</b-dropdown-item>
                    <b-dropdown-divider />
                    <b-dropdown-item v-on:click="handleSort('level', 'asc')">Level ASC</b-dropdown-item>
                    <b-dropdown-item v-on:click="handleSort('level', 'desc')">Level DESC</b-dropdown-item>
                </b-dropdown>
                <span class="badge badge-success badge-medium">{{ orderBy }} - {{ orderDir }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'comp-sort',
        props : {
            orderBy : { type : String, default : 'name'},
            orderDir : { type : String, default : 'asc'}
        },
        methods: {
            handleSort(orderBy, orderDir)
            {
        
                let data = { orderBy, orderDir }
                this.$emit('handleSort', data);
            }
        },
    }
</script>