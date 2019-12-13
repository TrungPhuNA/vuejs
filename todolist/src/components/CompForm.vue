<template>
    <div class="col-12 col-lg-6">
        <form-add v-bind:isShowForm="isShowForm" v-on:handleAddTask="handleAddTask"/>
        <form v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <input type="text" name="name" v-model="taskname" class="form-control" placeholder="Task Name" />
            </div>
            <div class="form-group">
                <label class="sr-only" for="">label</label>
                <select name="level" v-model="level" class="form-control" required="required">
                    <option value="0">Small</option>
                    <option value="1">Medium</option>
                    <option value="2">High</option>
                </select>
            </div>

            <button v-if="taskSelect === null" type="button" v-on:click="handleAddTaskToForm" class="btn btn-primary">Submit</button>
            <button v-else type="button" v-on:click="handleEditTaskToForm" class="btn btn-primary">Update</button>
            <button type="button" v-on:click="handleCancel" class="btn btn-secondary">Cancel</button>
        </form>
    </div>
</template>
<script>
    import FormAdd from './FormAdd'
    const uuidv4 = require('uuid/v4');
    export default {
        name: 'comp-form',
        props : {
            isShowForm : { type : Boolean , default : false},
            taskSelect : { type : Object , default : null}
        },
        components : {
            FormAdd
        },
        data() {
            return {
                taskname : '',
                level : ''
            }
        },
        watch : {
            // kiểm tra sự thay đổi dữ liệu
            taskSelect : function(newData, oldData) {
                if (newData !== null) {
                    // thay doi
                    this.taskname = newData.name;
                    this.level = newData.level; 
                }
            }
        },
        beforeUpdate() {
            
        },
        methods: {
            handleAddTask() {
                console.log("handleAddTask CompForm.vue");
                this.$emit("toggleForm")
            },
            handleCancel() {
                this.$emit("toggleForm")
                this.handleResetData();
            },
            handleResetData() 
            {
                this.taskname = '';
                this.level = '';
            },
            handleAddTaskToForm()
            {
                let task = {
                    id : uuidv4(),
                    name : this.taskname,
                    level : parseInt(this.level)
                }
                this.$emit("handleAddTaskToForm", task);
                this.handleCancel();
            },
            handleEditTaskToForm()
            {
                let objTask = {
                    id : this.taskSelect.id,
                    name : this.taskname,
                    level : this.level
                }

                this.$emit('handleUpdateTask', objTask);
                this.handleResetData();
            }
        }
    }
</script>