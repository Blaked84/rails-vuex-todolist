<template>
  <div id="app">
    <input placeholder="New Todo" @keyup.enter="addTodo"/>
    <ul>
      <todo v-for="(todo, index) in todos" :key="index" :todo="todo" ></todo>
    </ul>
    <span class="tips">Click on a task to edit</span>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex'
  import Todo from './todo.vue'
  
  export default {
    computed: {
        ...mapState(['todos'])
    },
    components: {
      Todo,
    },
    methods: {
        ...mapMutations(['completeAll', 'initTodo']),
        ...mapActions(['createTodo']),
        addTodo(e) {
            let body = e.target.value;
            this.$store.dispatch('createTodo', body);
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
  .tips {
    color: #999999
  }
</style>
