const { MemberVehicle } = require("../models");
const ApiController = require("./api.controller")(MemberVehicle);

class MemberVehicleController extends ApiController {}

module.exports = MemberVehicleController;
