<template>
    <footer>
        <h1>{{ title }}</h1>
    </footer>
</template>

<script>
export default {
    name: 'comp-footer',
    props : {
        title : {
            type :String,
            default : "Giá trị mặc định"
        }
    },
    data() {
        return {
            textFooter: 'Hello Footer'
        }
    }
}
</script>

<style>

</style>
