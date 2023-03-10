import { appState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather(){
  if(appState.temperatureType == 'fahrenheit'){
    setHTML('temperature', `<span class="fs-4">${appState.temperatureF} F</span>`)
  }else if(appState.temperatureType == 'celsius'){
    setHTML('temperature', `<span class="fs-4">${appState.temperatureC} C</span>`)
  }else if(appState.temperatureType == 'kelvin'){
    setHTML('temperature', `<span class="fs-4">${appState.temperatureK} K</span>`)
  }
  setHTML('weather', `<span class="fs-5">${appState.weather.description}</span>`)
  setHTML('weatherIcon', `<img src="${appState.weatherIcon}"></img>`)
}

export class WeatherController{
  constructor(){
    this.getWeather()
    setTimeout(_drawWeather, 1000)
    appState.on('temperatureType', _drawWeather)
  }

  changeFormat(){
    try {
      weatherService.changeFormat()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getWeather(){
    try {
      await weatherService.getWeather()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}