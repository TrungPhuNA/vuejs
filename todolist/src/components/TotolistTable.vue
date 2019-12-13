<template>
    <div class="panel panel-success">
        <div class="panel-heading">List Task</div>
        <table class="table table-hover ">
            <thead>
                <tr>
                    <th style="width: 10%" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%" class="text-center">Level</th>
                    <th style="width: 160px">Action</th>
                </tr>
            </thead>

            <tbody v-if="listTask.length !== 0">

                <TudoListItem v-for="(task , index) in listTask" 
                    v-bind:task="task"
                    v-bind:key="task.id"
                    v-bind:index="index + 1"
                    v-on:handleDelete="handleDelete"
                    v-on:handleEdit="handleEdit"
                />
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">Empty Data</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import TudoListItem from './ToduListItem'
    export default {
        name : "tudo-list-table",
        props : {
            listTask : {type : Array , default: []}
        },
        components : {
            TudoListItem
        },
        data() {
            return {}
        },
        methods: {
            handleDelete(data)
            {
                if (confirm("Bạn có muốn xoá: "+ data.name))
                {
                    this.$emit('handleDelete',data)
                }
            },
            handleEdit(task)
            {
            
                this.$emit('handleEdit', task)
            }
        },
    }
</script>