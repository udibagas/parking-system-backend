const { Kamera } = require("../models");
const ApiController = require("./api.controller")(Kamera);

class KameraController extends ApiController {}

module.exports = KameraController;
