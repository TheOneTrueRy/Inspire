import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
  async addTodo(formData) {
    let newTodo = new Todo(formData)
    const res = await sandboxApi.post('/Ry/todos', newTodo)
    appState.todos.push(newTodo)
    appState.emit('todos')
  }
  async getTodos() {
    const res = sandboxApi.get('/Ry/todos')
    let myTodos = res.data.map(p => new Todo(p))
    appState.todos = myTodos
  }

}

export const todoService = new TodoService()