import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class WeatherService{
  changeFormat() {
    if(appState.temperatureType == 'fahrenheit'){
      appState.temperatureType = 'celsius'
    }else if (appState.temperatureType == 'celsius'){
      appState.temperatureType = 'fahrenheit'
    }
  }
  async getWeather() {
    const res = await sandboxApi.get('/weather')
    console.log(res.data);
  }

}

export const weatherService = new WeatherService()