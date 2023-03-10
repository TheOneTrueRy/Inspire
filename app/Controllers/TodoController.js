import { appState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos(){
  let template = ''
  appState.todos.forEach(t => template += t.TodoTemplate)
  setHTML('todoList', template)
  setHTML('todoNum', `(${appState.todos.filter(t => t.completed == false).length} left)`)
}

export class TodoController{
  constructor(){
    appState.on('todos', _drawTodos)
    appState.on('user', this.getTodos)
    appState.on('user', _drawTodos)
  }

  async getTodos(){
    try {
      await todoService.getTodos()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async addTodo(){
    try {
      window.event.preventDefault()
      let form = event.target
      let formData = getFormData(form)
      await todoService.addTodo(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  toggleCompleted(todoID){
    try {
      todoService.toggleCompleted(todoID)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async deleteTodo(todoID){
    try {
      if (await Pop.confirm('Are you sure you want to delete this TODO?')){
        debugger
        await todoService.deleteTodo(todoID)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}