<template>
    <li class="todo" :class="{'is_complete': todo.done}">
        <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)"/>
        
        <span v-show="!editMode" @click="toggleEditMode(true)">{{ todo.name }}</span>
        <input v-model="editName" v-show="editMode" @keyup.enter="updateTodo"/>
        
        <button @click="deleteTodo(todo)" v-show="!editMode">x</button>
        <button @click="toggleEditMode(false)" v-show="editMode">cancel</button>
    </li>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    
    export default {
    props: ["todo"],
    data() {
        return {
            editMode: false,
            editName: ""
        }
    },
    computed: mapState(['count']),
    methods: {
        ...mapActions(['deleteTodo', 'toggleTodo']),
        toggleEditMode(status) {
            this.editName = this.todo.name;
            this.editMode = status
        },
        updateTodo() {
            let newTodo = this.todo;
            newTodo.name = this.editName;
            this.$store.dispatch('updateTodo', newTodo);
            this.toggleEditMode(false)
        }
    }
    }
</script>

<style scoped>
    .todo.is_complete{
        color: #999999;
    }
</style>
