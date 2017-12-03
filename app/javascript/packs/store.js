import axios from 'axios'
export default {
    state: {
        todos: []
    },

    mutations: {
        initTodo(state) {
            axios.get("/todos.json")
            .then( responce => {
                state.todos = responce.data;
            })
        },

        deleteTodo({todos}, todo) {
            todos.splice(todos.indexOf(todo), 1)
        },

        toggleTodo(state, todo) {
            todo.done = ! todo.done
        },

        addTodo({todos}, new_todo) {
            todos.push(new_todo)
        },

        updateTodo(state, todo, new_data) {
            todo = new_data
        }
    },
    actions: {
        createTodo(context, body) {
            let payload = {
                name: body,
                done: false
            };
            axios.post("/todos.json", payload)
            .then( responce => {
                context.commit('addTodo', responce.data);
            })
        },

        deleteTodo(context, todo) {
            axios.delete(todo.url)
            .then( responce => {
                context.commit('deleteTodo', todo);
            })
        },

        toggleTodo(context, todo) {
            todo.done = !todo.done;
            context.dispatch('updateTodo', todo)
        },

        updateTodo(context, todo) {
            axios.patch(todo.url, todo)
            .then( responce => {
                  context.commit('updateTodo', todo, responce.data);
            })
        },
    }

};
