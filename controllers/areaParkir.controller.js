const { AreaParkir } = require("../models");
const ApiController = require("./api.controller")(AreaParkir);

class AreaParkirController extends ApiController {}

module.exports = AreaParkirController;
