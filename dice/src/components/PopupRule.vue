<template>
    <div class="wrapper-popup" v-bind:class="getClassPopup">
        <div class="rule">
            <h3>Luật Chơi</h3>
            <p>Đây là luật chơi bạn phải tuân thủ luật chơi của chúng tôi</p>
            <button v-on:click="confirm" class="confirm">Xác nhận</button>
        </div>
    </div>
</template>
<script>
    export default {
        name : 'popup-rule',
        props : {
            isPopup : { type : Boolean, default:  false}
        },
        data() {
            return {

            }
        },
        methods : {
            confirm() {
                // truyen event ra thang cha
                this.$emit("handleClosePopup");
            }
        },
        computed: {
            getClassPopup() {
                return {
                    'open-popup' : this.isPopup
                }
            }
        },
    }
</script>
<style>
    .wrapper-popup {
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }

    .wrapper-popup.open-popup {
        visibility: visible;
        opacity: 1;
    }
    .rule {
        padding: 20px;
        position: absolute;
        background-color: white;
        width: 350px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        font-family: Arial, Helvetica, sans-serif;
        transition: all .3s ease;
    }
    
    h3 {
        margin-bottom: 10px;
        border-bottom: 1px solid #f2f2f2;
        padding-bottom: 10px;
    }
    .confirm {
        cursor: pointer;
        border:2px solid #333;
        background-color: #fff;
        padding: 10px 15px;
        margin-top: 20px;   
        transition: all .3s ease;
    }
    .confirm:hover {
        background-color: #000;
        color: white;

    }
</style>