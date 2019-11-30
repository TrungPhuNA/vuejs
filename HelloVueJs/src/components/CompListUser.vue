<template>
    <div class="list-user">
        <p>{{ text }}</p>
        <ul>
            <CompUser v-for="user in listUsers" 
            v-bind:key="user.id" v-bind:user="user"
            v-on:clickUserDelete="handleDeleteUserEvent"

             />
        </ul>
    </div>
</template>
<script>
    import CompUser from './User';
    export default {
        name : 'comp-listUser',
        props : {
            listUsers : {
                tyle : Array,
                default : []
            }
        },
        data() {
            return {
                text : "Danh sách thành viên"
            }
        },
        components : {
            CompUser
        },
        methods : {
            handleDeleteUserEvent(data) {
                console.log("delete user List user", data);
                this.$emit('deleteUser',data)
            }
        }
    }
</script>
<style>
    ul {
        list-style: none;
    }

    ul li { border-bottom: 1px solid #f2f2f2}
</style>