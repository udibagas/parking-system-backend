const { AbsensiOperator } = require("../models");
const ApiController = require("./api.controller")(AbsensiOperator);

class AbsensiOperatorController extends ApiController {}

module.exports = AbsensiOperatorController;
