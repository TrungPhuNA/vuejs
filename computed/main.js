var vueInstance = new Vue({
    el : "#app",
    data : {
        message : "Xin Chào Phan Trung Phú",
        a : 0,
        b : 0,
        number = 20
    },
    methods: {
         // Lời gọi hàm nene hafm sẽ phải co ()  
        addA() {
            return this.number + this.a
        },
        addB() {
            return this.number + this.b
        }
        
    },
    computed : {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }
});