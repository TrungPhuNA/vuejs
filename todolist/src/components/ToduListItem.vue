<template>
    <tr>
        <td class="text-center">{{  index }}</td>
        <td>{{ task.name }}</td>
        <td class="text-center"><span class="badge" v-bind:class="getClassLevel" >{{  getLevelName }}</span></td>
        <td>
            <button type="button" v-on:click="handleEdit" class="btn btn-xs btn-warning">Edit</button>
            <button type="button" v-on:click="deleteItem" class="btn btn-xs btn-danger">Delete</button>
        </td>
    </tr>
</template>
<script>
import mapLevel from './../mocks/level'
    export default {
        name : 'tudo-list-item',
        props : {
            task : { type :  Object , default : {} },
            index : { type : Number}
        },
        data() {
            return { mapLevel : mapLevel}
        },
        // created()  {
        //     console.log("Map level ",mapLevel)
        // },
        computed : {
            getLevelName() {
                return this.mapLevel[this.task.level].name
            },
            getClassLevel() {
                return this.mapLevel[this.task.level].class
            }
        },
        methods: {
            deleteItem()
            {
                this.$emit('handleDelete',this.task)
            },
            handleEdit()
            {
                this.$emit('handleEdit',this.task)
            }
        },
    }
</script>