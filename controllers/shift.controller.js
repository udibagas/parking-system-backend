const { Shift } = require("../models");
const ApiController = require("./api.controller")(Shift);

class ShiftController extends ApiController {}

module.exports = ShiftController;
