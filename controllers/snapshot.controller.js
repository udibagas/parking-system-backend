const { Snapshot } = require("../models");
const ApiController = require("./api.controller")(Snapshot);

class SnapshotController extends ApiController {
  static methods = ["index", "destroy"];
}

module.exports = SnapshotController;
