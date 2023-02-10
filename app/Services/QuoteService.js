import { sandboxApi } from "./AxiosService.js"

class QuoteService{
  async getQuote() {
    const res = await sandboxApi.get('quotes')
    console.log('QUOTE:', res.data)
    document.getElementById('quote').innerHTML = `"${res.data.content}"`
    document.getElementById('author').innerHTML = `-${res.data.author}`
  }

}

export const quoteService = new QuoteService()