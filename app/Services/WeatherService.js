import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService{
  changeFormat() {
    if(appState.temperatureType == 'fahrenheit'){
      appState.temperatureType = 'celsius'
    }else if (appState.temperatureType == 'celsius'){
      appState.temperatureType = 'kelvin'
    }else if(appState.temperatureType == 'kelvin'){
      appState.temperatureType = 'fahrenheit'
    }
  }
  async getWeather() {
    const res = await sandboxApi.get('/weather')
    console.log(res.data)
    appState.weatherIcon = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}.png`
    appState.temperatureK = res.data.main.temp
    appState.temperatureF = (((appState.temperatureK-273.15)*1.8)+32).toFixed(2)
    appState.temperatureC = (appState.temperatureK-273.15).toFixed(2)
    appState.weather = res.data.weather[0]
  }

}

export const weatherService = new WeatherService()