<template>
    <header>
        <h1>{{ title }}</h1>
        <button v-on:click="changeTitle">Thay đổi title từ component Con</button>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props : {
        title : String
    },
    methods : {
        changeTitle(e) {
            var data = {
                title : "Thay đổi tiêu đề cho tôi đi nào "
            }
            console.log("init change title");
            this.$emit('changeTitleEvent',data)
        }
    }
}
</script>

<style>

</style>
