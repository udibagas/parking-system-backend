const { Printer } = require("../models");
const ApiController = require("./api.controller")(Printer);

class PrinterController extends ApiController {}

module.exports = PrinterController;
