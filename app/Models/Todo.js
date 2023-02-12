

export class Todo{
  constructor(data){
    this.id = data.id
    this.description = data.description
    this.completed = data.completed || false
  }

  get TodoTemplate(){
    if(this.completed == true){

      return `
      <div class="col-1 offset-1 d-flex align-items-center mt-1 g-0">
        <input checked type="checkbox" name="" id="" onclick="app.">
      </div>
      <div class="col-8 mt-1">
        <span class="fs-4">123123123123123123123</span>
      </div>
      <div class="col-2 pe-5 mt-1">
        <button type="button" onclick="app.todoController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
      </div>
      `
    }else if (this.completed == false){
      return `
      <div class="col-1 offset-1 d-flex align-items-center mt-1 g-0">
        <input type="checkbox" name="" id="" onclick="app.">
      </div>
      <div class="col-8 mt-1">
        <span class="fs-4">123123123123123123123</span>
      </div>
      <div class="col-2 pe-5 mt-1">
        <button type="button" onclick="app.todoController.deleteTodo('${this.id}')" class="btn btn-danger"><i class="mdi mdi-delete"></i></button>
      </div>
      `
    }
  }
}