const { AreaParkir } = require("../models");
const ApiController = require("./api.controller")(AreaParkir);

class AreaParkirController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = AreaParkirController;
