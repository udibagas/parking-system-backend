const { Kamera } = require("../models");
const ApiController = require("./api.controller")(Kamera);

class KameraController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = KameraController;
