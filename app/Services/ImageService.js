import { setText } from "../Utils/Writer.js"
import { sandboxApi } from "./AxiosService.js"

class ImageService{
  async getImage() {
    const res = await sandboxApi.get('images')
    document.body.style.backgroundImage = `url(${res.data.imgUrl})`
    setText('imgAuthor', res.data.author)
  }

}

export const imageService = new ImageService()