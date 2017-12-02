<template>
    <li class="todo" :class="{'is_complete': todo.done}">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)"/>
        {{ todo.name }}
        <button @click="deleteTodo(todo)">x</button>
    </li>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  
  export default {
    props: ["todo"],
    computed: mapState(['count']),
    methods: {
        ...mapActions(['deleteTodo', 'toggleTodo'])
    }
  }
</script>

<style scoped>
    .todo.is_complete{
        color: #999999;
    }
</style>
