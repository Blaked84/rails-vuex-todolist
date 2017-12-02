export default {
  state: {
    todos: [
        {name: "todo 1", done: true},
        {name: "todo 2", done: false},
        {name: "todo 3", done: false}
    ]
  },

  mutations: {
    completeAll({todos}) {
      todos.forEach(todo => todo.done = true)
    },
    deleteTodo({todos}, todo) {
      todos.splice(todos.indexOf(todo), 1)
    },
    toggleTodo(sate, todo) {
      todo.done = ! todo.done
    },
    addTodo({todos}, body) {
      todos.push(
        {
          name: body,
          done: false
        }
      )
    }
  }

};
