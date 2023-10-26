const { ManualOpenLog } = require("../models");
const ApiController = require("./api.controller")(ManualOpenLog);

class ManualOpenLogController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = ManualOpenLogController;
