import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  clockController = new ClockController()
  imageController = new ImageController()
  quoteController = new QuoteController()
  weatherController = new WeatherController()
  todoController = new TodoController()
  userController = new UserController()
}

window["app"] = new App();
