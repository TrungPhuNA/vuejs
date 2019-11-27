var vueInstance = new Vue({
    el : "#app",
    data : {
        name : "Phan Trung Phú",
        age  : 26,
        target: "_blank",
        face : "https://www.facebook.com/TrungPhuNA"
    },
    methods: {
        formatPrice : function(number) {
            console.log(this.age)
        }
    }
});