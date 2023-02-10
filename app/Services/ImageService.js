import { sandboxApi } from "./AxiosService.js"

class ImageService{
  async getImage() {
    const res = await sandboxApi.get('images')
    document.body.style.backgroundImage = `url(${res.data.imgUrl})`
  }

}

export const imageService = new ImageService()