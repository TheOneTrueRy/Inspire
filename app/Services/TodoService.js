import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"
import { sandboxApi } from "./AxiosService.js"

class TodoService{
  async deleteTodo(todoID) {
    let todoIndex = appState.todos.findIndex(t => t.id == todoID)
    const res = await sandboxApi.delete(`/${appState.user.name}/todos/${todoID}`)
    appState.todos.splice(todoIndex, 1)
    appState.emit('todos')
  }
  async toggleCompleted(todoID) {
    let todo = appState.todos.find(t => t.id == todoID)
    if(todo.completed == false){
      todo.completed = true
    }else if(todo.completed == true){
      todo.completed = false
    }
    const res = await sandboxApi.put(`/${appState.user.name}/todos/${todoID}`, todo)
    appState.emit('todos')
  }
  async addTodo(formData) {
    let newTodo = new Todo(formData)
    const res = await sandboxApi.post(`/${appState.user.name}/todos`, newTodo)
    appState.todos.push(new Todo(res.data))
    appState.emit('todos')
  }
  async getTodos() {
    const res = await sandboxApi.get(`/${appState.user.name}/todos`)
    let myTodos = res.data.map(p => new Todo(p))
    appState.todos = myTodos
  }

}

export const todoService = new TodoService()