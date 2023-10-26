const { ParkingTransaction } = require("../models");
const ApiController = require("./api.controller")(ParkingTransaction);

class ParkingTransactionController extends ApiController {
  static methods = ["index", "show", "create", "update", "destroy"];
}

module.exports = ParkingTransactionController;
