import { quoteService } from "../Services/QuoteService.js";
import { Pop } from "../Utils/Pop.js";

export class QuoteController{
  constructor(){
    this.getQuote()
  }

  async getQuote(){
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}