import { sandboxApi } from "./AxiosService.js"

class QuoteService{
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    document.getElementById('quote').innerHTML = `"${res.data.content}"`
    document.getElementById('author').innerHTML = `-${res.data.author}`
  }

}

export const quoteService = new QuoteService()