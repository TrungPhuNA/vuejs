<template>
    <div class="list-user">
        <li>
            Name: {{ user.name }} - Age: {{  user.age }} 
            <button class="delete" v-on:click="deleteUser">Delete</button>
        </li>
    </div>
</template>
<script>
    export default {
        name : 'copm-user',
        props : {
            user : Object
        },
        data() {
            return {
                
            }
        },
        methods : {
            deleteUser() {
                var data = {
                    id : this.user.id
                }
                this.$emit('clickUserDelete',data);
            }
        }
    }
</script>
<style>
    ul li {
        position: relative;
    }
    .delete {
        position: absolute;
        background-color: aquamarine;
        color:#000;
        outline: none;
        cursor: pointer;
    }
</style>