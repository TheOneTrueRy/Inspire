import { imageService } from "../Services/ImageService.js";
import { Pop } from "../Utils/Pop.js";

export class ImageController{
  constructor(){
    this.getImage()
  }

  async getImage(){
    try {
      await imageService.getImage()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}