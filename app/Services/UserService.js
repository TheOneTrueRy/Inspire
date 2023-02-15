import { appState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js"
import { saveState } from "../Utils/Store.js"


class UserService{
  async setUser() {
    let userInput = await Pop.prompt('Who... are you?')
    if(userInput != '' || null){
      appState.user.name = userInput
    }
    saveState('user', appState.user)
    appState.emit('user')
  }
  drawUser() {
    if(appState.user == null || undefined){
      appState.user.name = ''
    }
  }

}

export const userService = new UserService()