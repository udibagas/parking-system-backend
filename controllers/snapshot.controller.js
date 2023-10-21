const { Snapshot } = require("../models");
const ApiController = require("./api.controller")(Snapshot);

class SnapshotController extends ApiController {}

module.exports = SnapshotController;
