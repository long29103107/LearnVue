const vueInstane = new Vue({
    el: '#app',
    data: {
      todos: [],
      todo: '',
    },
    methods:{
        addToDo(){
            if(this.todo == '') {
                alert('Nothing !!!')
            } else {
                this.todos.push(this.todo);
                this.todo = '';
                this.$refs.todo.focus();
            }
        },
        removeItem(index){
            this.todos.splice(index, 1);
        }
    }
})