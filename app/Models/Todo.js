import { generateId } from "../Utils/generateId.js"


export class Todo{
  constructor(data){
    this.id = data.id
    this.description = data.description
    this.completed = data.completed || false
  }

  get TodoTemplate(){
    if(this.completed == true){
      return `
      <div class="col-12 d-flex justify-content-between align-items center mt-1">
        <input checked type="checkbox" name="" id="" onclick="app.todoController.toggleCompleted('${this.id}')">
        <span class="fs-5 completed">${this.description}</span>
        <button type="button" onclick="app.todoController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
      </div>
      `
    }else if (this.completed == false){
      return `
      <div class="col-12 d-flex justify-content-between align-items center mt-1">
        <input type="checkbox" name="" id="" onclick="app.todoController.toggleCompleted('${this.id}')">
        <span class="fs-5">${this.description}</span>
        <button type="button" onclick="app.todoController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
      </div>
      `
    }
  }
}