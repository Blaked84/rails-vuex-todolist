<template>
  <div id="app">
    <input placeholder="New Todo" @keyup.enter="addTodo"/>
    <button @click="completeAll" v-show="! allTodoCompleted">All done!</button>
    <ul>
      <todo v-for="(todo, index) in todos" :key="index" :todo="todo" ></todo>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import Todo from './todo.vue'
  
  export default {
    computed: {
        ...mapState(['todos']),
        allTodoCompleted() {
            return this.todos.every(todo => todo.done)
        }
    },
    components: {
      Todo,
    },
    methods: {
        ...mapMutations(['completeAll']),
        addTodo(e) {
            let body = e.target.value;
            this.$store.commit('addTodo', body);
            e.target.value = "";
        }
    }
  }
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
