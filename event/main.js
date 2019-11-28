var vueInstance = new Vue({
    el : "#app",
    data : {
        age  : 26,
        clientX: 0,
        clientY : 0
    },
    methods: {
        countAge(number, event)
        {
            console.log(event.target)
            this.age ++ ;
        },
        handelMousemove(e)
        {
            console.log(e);
            this.clientX = e.clientX
            this.clientY = e.clientY
        },
        handelSubmit(e)
        {
            console.log(e);
        }   
    }
});