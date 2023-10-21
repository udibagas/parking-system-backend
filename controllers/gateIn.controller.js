const { GateIn } = require("../models");
const ApiController = require("./api.controller")(GateIn);

class GateInController extends ApiController {}

module.exports = GateInController;
