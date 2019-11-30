<template>
	<div id="app">
        <button 
            v-on:click="title='Tiêu đề đã được thay đổi'">
            Thay đổi Title từ Component
            </button>
		<comp-header  v-bind:title="title" v-on:changeTitleEvent="handleChangeTitle" />
		<comp-listUser 
            v-bind:listUsers="listUsers"
            v-on:deleteUser="handleDeleteUser"
         />
		<comp-footer />
        <comp-ref />
	</div>
</template>

/**

    - props Truyền dữ liệu từ comp cha sang con
        + Chú pháp giống thuộc tính => Ràng buộc thuộc tính
        + Sử dụng v-bind để ràng buộc 
        - props down  chỉ truyền dữ liệu cha vào con 
        - event up : Truyền thông điêp cho component cha biết nó muốn thay đổi dữ liệu  -> Nhiệm cụ 
        compoent cha là nhận thông điệp và thay đổi  -> customer events   
 */
<script>
import CompHeader from './components/CompHeader.vue';
import CompListUser from './components/CompListUser.vue';
import CompFooter from './components/CompFooter.vue';
import CompRef from './components/CompRef';
export default {
	name: 'app',
	data () {
		return {
            title: 'Đây là tiêu đề Header',
            listUsers : [
                {
                    id : 1,
                    name : "Phan Trung Phú",
                    age  : 20
                },
                {
                    id : 2,
                    name : "Nguyễn Văn A",
                    age  : 26
                },
                {
                    id : 3,
                    name : "Hoàng Anh Đức",
                    age  : 29
                },
            ]
		}
	},
	components: {
		CompHeader,
        CompFooter,
        CompListUser,
        CompRef,
    },
    methods : {
        handleChangeTitle() {
            this.title = "Title đã được thay đổi thành công : hehehe";
        },
        handleDeleteUser(data) {
            var indexUser = -1;
            this.listUsers.forEach(( user, index) => {
                
                if (user.id === data.id) {
                    indexUser = index
                    console.log(index);
                }
            });

            if (indexUser != -1 ) {
                var userDelete = this.listUsers.splice(indexUser,1);
                console.log(userDelete);
            }
        }
    }
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
