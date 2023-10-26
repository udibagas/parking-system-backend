const { Shift } = require("../models");
const ApiController = require("./api.controller")(Shift);

class ShiftController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = ShiftController;
