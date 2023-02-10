import { appState } from "../AppState.js"

class ClockService{
  changeFormat() {
    if(appState.clockMode == 'standard'){
      appState.clockMode = 'military'
    }else if(appState.clockMode == 'military'){
      appState.clockMode = 'standard'
    }
  }

  getCurrentTime(){
    appState.currentTime = new Date()
    let hours = appState.currentTime.getHours()
    let minutes = appState.currentTime.getMinutes()
    let standardHours = (hours - 12)
    let time = hours + ':' + minutes
    if(minutes < 10){
      minutes = '0' + minutes
    }
    if(appState.clockMode == 'standard'){
      if(hours > 12){
        time = standardHours + ':' + minutes + 'pm'
      }else{
        time = standardHours + ':' + minutes + 'am'
      }
    }else{
      time = hours + ':' + minutes
    }
    document.getElementById('clock').innerHTML = time
  }

}

export const clockService = new ClockService()