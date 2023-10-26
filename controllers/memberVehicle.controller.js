const { MemberVehicle } = require("../models");
const ApiController = require("./api.controller")(MemberVehicle);

class MemberVehicleController extends ApiController {
  static methods = ["destroy"];
}

module.exports = MemberVehicleController;
