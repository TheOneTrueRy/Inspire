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
    console.log(res.data);
    appState.temperatureK = res.data.main.temp
    console.log(appState.temperatureK);
    appState.temperatureF = (((appState.temperatureK-273.15)*1.8)+32).toFixed(2)
    appState.temperatureC = (appState.temperatureK-273.15).toFixed(2)
    appState.weather = res.data.weather[0]
    console.log(appState.weather)
  }

}

export const weatherService = new WeatherService()