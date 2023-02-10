import { appState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { Pop } from "../Utils/Pop.js";

export class ClockController{
  constructor(){
    setInterval(this.getCurrentTime, 500)
  }

  changeFormat(){
    try {
      clockService.changeFormat()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  getCurrentTime(){
    clockService.getCurrentTime()
  }
}