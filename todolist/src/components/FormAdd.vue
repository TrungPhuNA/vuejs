<template>
    <!-- ADD : START -->
    <div class="form-group add-task">
        
        <button v-if="!isShowForm" type="button" v-on:click="onClickAdd" class="btn btn-info btn-block">Add Task</button>
        <button v-else type="button" v-on:click="onClickAdd" class="btn btn-primary btn-block">Close Form</button>
    </div>
    <!-- ADD : END -->
</template>
<script>
    export default {
        name: 'form-add',
        props : {
            isShowForm : {type :Boolean, default : false}
        },
        data() {
            return {}
        },
        methods: {
            onClickAdd() {
                console.log("Click add form");
                this.$emit("handleAddTask");
            }
        },
    }
</script>