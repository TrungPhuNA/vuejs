var vueInstance = new Vue({
    el : "#app",
    data : {
        title : "Iphone 6"
    },
    methods: {
        say : function(text) {
            return "Xin Chào: " + text
        }
    }
})
  
console.log(vueInstance);