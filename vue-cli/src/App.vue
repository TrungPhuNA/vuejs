<template>
    <div id="app">
        <CompHeader />
        <img src="./assets/logo.png">
        <h1>Xin Chào Trung Phú NA</h1>
        <CompFooter />
    </div>
</template>
<script>
    import CompHeader from './components/CompHeader'
    import CompFooter from './components/CompFooter'
    export default {
        name: 'App',
        components : {
            CompHeader,
            CompFooter
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
