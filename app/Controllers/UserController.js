import { appState } from "../AppState.js";
import { userService } from "../Services/UserService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawUser(){
  userService.drawUser()
  if(appState.user){
    setText('user', `Hello ${appState.user.name}`)
  }
}

export class UserController{
  constructor(){
    _drawUser()
    appState.on('user', _drawUser)
  }

  setUser(){
    try {
      userService.setUser()
    } catch (error) {
      console.error(error);
      Pop.error(error)
    }
  }
}