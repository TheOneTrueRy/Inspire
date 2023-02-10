import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  clockController = new ClockController()
  imageController = new ImageController()
  quoteController = new QuoteController()
}

window["app"] = new App();
