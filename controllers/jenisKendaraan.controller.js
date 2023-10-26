const { JenisKendaraan } = require("../models");
const ApiController = require("./api.controller")(JenisKendaraan);

class JenisKendaraanController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = JenisKendaraanController;
