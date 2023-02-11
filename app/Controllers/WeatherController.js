import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

export class WeatherController{
  constructor(){
    this.getWeather()
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