<template>
	<div id="app">
		<b-container>
            <!-- TITLE : START -->
            <CompTitle/>
            <!-- TITLE : END -->
            <b-row>
                <!-- CONTROL (SEARCH + SORT + ADD) : START -->
                <CompControl
                    v-bind:orderBy="orderBy"
                    v-bind:orderDir="orderDir"
                    v-on:handleSort="handleSort"
                    v-bind:stringSearch="stringSearch"
                    v-on:handleSearchControl="handleSearchControl"
                 />
                <!-- CONTROL (SEARCH + SORT + ADD) : END -->

                <!-- FORM : START -->
            
                <CompForm 
                    v-bind:taskSelect="taskSelect"
                    v-on:toggleForm="toggleForm" 
                    v-on:handleUpdateTask="handleUpdateTask"
                    v-on:handleAddTaskToForm="handleAddTaskToForm"
                    v-bind:isShowForm="isShowForm"
                />
                <!-- FORM : END -->
            </b-row>
            <!-- LIST : START -->
            <TodoListTable 
                v-bind:listTask="listTaskSort" 
                v-on:handleDelete="handleDelete"
                v-on:handleEdit="handleEdit"
            />
		</b-container>
	</div>
</template>

<script>
import TodoListTable from "./components/TotolistTable";
import CompControl from "./components/CompControl";
import CompTitle from "./components/CompTitlte";
import CompForm from "./components/CompForm";

import listTask from "./mocks/tasks";
/*
App
	CompForm
		FormAdd -> click 
			-> Run onClickAddTask() 
			-> Kích hoạt Event handleAddTask 
			-> Kích hoạt tiếp toggleForm

*/
// Lưu dũ liệu -> Không cần -> Mock Data, Fake Data

export default {
	name: 'app',
    components : {
        TodoListTable,
        CompControl,
        CompTitle,
        CompForm
    },
	data () {
		return {
            listTask : listTask,
            isShowForm : false,
            stringSearch : '',
            orderBy : 'name',
            orderDir : 'asc',
            taskSelect : null
		}
    },
    watch : {
        listTask : function(newTask) {
            let tasks = JSON.stringify(newTask);
            console.log('watch listTask' + tasks);
            localStorage.setItem('tasks', tasks);
        }
    },
	created () {
        let tasks = localStorage.getItem('tasks');
        if (tasks !== null) {
            this.listTask = JSON.parse(tasks);
        }else {
            this.listTask = [];
        }
    },
	computed: {
        listTaskSearch() {
            // tìm kiếm
            const {stringSearch} = this;
            console.log("strSearch",stringSearch);
            var newItem = this.listTask.filter( item => {
                return item.name.toLowerCase().includes(stringSearch.toLowerCase());
            });

            return newItem;
        },
        listTaskSort()
        {
            var listTask = [...this.listTaskSearch];
            if (this.orderBy === 'name')
                listTask.sort(this.comparName);
            else if (this.orderBy === 'level') 
                listTask.sort(this.comparLevel);

            return listTask;
        }
        
	},
	methods: {
        handleUpdateTask(newTask)
        {
            console.log(newTask);
            let index = this.listTask.findIndex(item => item.id === newTask.id);
            console.log(index);
            if (index !== -1 ) {
                this.listTask.splice(index, 1, newTask);
                this.toggleForm();
            }
        },
        handleAddTaskToForm(task)
        {
        
            this.listTask.push(task);
        },
		toggleForm() {
            if (this.isShowForm) this.taskSelect = null;
            this.isShowForm = !this.isShowForm ;

            console.log("toggleForm App");
        },
        handleSearchControl(data)
        {
            console.log("search App", data);
            this.stringSearch = data;
        },
        handleSort(data)
        {
            console.log(data);
            this.orderBy = data.orderBy;
            this.orderDir = data.orderDir;
        },
        comparName (a, b) {
            var numberSort = this.orderDir === 'asc' ? -1 : 1;
            if (a.name < b.name) return -1;
            else if (a.name > b.name ) return  numberSort * (-1);
            return 0;
        },
        comparLevel (a, b) {
            var numberSort = this.orderDir === 'asc' ? -1 : 1;
            if (a.level < b.level) return -1;
            else if (a.level > b.level ) return  numberSort * (-1);
            return 0;
        },
        handleDelete(data)
        {
            let newItem = this.listTask.filter(item => item.id !== data.id);
            this.listTask = newItem;
        },
        handleEdit(task)
        {
            this.isShowForm = true;
            console.log(task);
            this.taskSelect =  task;
        }
	}
}
</script>

<style>


    body {
        padding: 100px 0;
    }
    .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
        vertical-align: middle;
    }

    .container > .row {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    span.badge-medium {
        padding: 11px 10px;
        margin: 0px 8px;
        font-size: 16px;
        display: inline-block;
        vertical-align: top;
    }

    @media (max-width: 992px) {
        .add-task {
            margin-top: 50px;
        }
    }

</style>
