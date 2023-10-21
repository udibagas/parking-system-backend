const { Pos } = require("../models");
const ApiController = require("./api.controller")(Pos);

class PosController extends ApiController {}

module.exports = PosController;
