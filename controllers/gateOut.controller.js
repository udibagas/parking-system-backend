const { GateOut } = require("../models");
const ApiController = require("./api.controller")(GateOut);

class GateOutController extends ApiController {}

module.exports = GateOutController;
