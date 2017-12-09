<template>
    <div id="app">
        <div class="card">
            <input placeholder="New Todo" @keyup.enter="addTodo"/>
            <ul>
                <todo v-for="(todo, index) in todos" :key="index" :todo="todo" ></todo>
            </ul>
        </div>
        <div class="tips">Click on a task to edit</div>
        <footer>
            <a href="https://github.com/Blaked84/rails-vuex-todolist">Source</a>
            - by
            <a href="https://twitter.com/blaked_84">@blaked</a>
        </footer>
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
        color: #ffffff5e;
        text-align: center;
        display: block;
        padding: 1em;
    }
    
    .card {
        border-radius: 5px;
        background: white;
        overflow: hidden;
        padding: 1em;
        max-width: 300px;
        margin: 2em auto auto;
    }
    
    input {
        width: 100%;
        background: #EEE;
        border: none;
        padding: 7px;
        box-sizing: border-box;
    }
    
    ul {
        list-style: none;
        padding-left: 0;
    }
    
    footer {
        position: absolute;
        text-align: center;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 1em;
    }
    footer, footer a {
        color: #ffffff5e;
    }
    
</style>


<style>
    body {
        background: #bc4e9c; /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #bc4e9c, #f80759); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #bc4e9c, #f80759); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        font-family: sans-serif;
    }
</style>
