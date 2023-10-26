const { Printer } = require("../models");
const ApiController = require("./api.controller")(Printer);

class PrinterController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = PrinterController;
