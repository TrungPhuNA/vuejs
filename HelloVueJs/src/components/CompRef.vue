<template>
    <div class="data-ref">
        <h1>Demo Ref</h1>
        <button type="" class="avatar" v-on:click="clickHandleFile"> Thay đổi Avatar</button>
        <input type="file" style="display:none" ref="fileInputAvatar">
    </div>
</template>

<script>
    export default {
        name : 'comp-ref',
        methods : {
            clickHandleFile(e)
            {   
                this.$refs.fileInputAvatar.click();
            }
        }
    }
</script>

<style>
    .data-ref {
        width: 300px;
        height: 300px;
        border:1px solid #f2f2f2;
        text-align: center;
        margin:0 auto;
    }
    .avatar {
        padding: 12px 15px;
        background-color: #f2f2f2;
        color: white;
        border:2px solid  #333;
        background-color: #333;
        transition: all .3 ease;
        cursor: pointer;
        margin-bottom: 10px;
    }
    .avatar:hover {
        background-color: white;
        color: #333;
    }
</style>