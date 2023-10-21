const { ParkingTransaction } = require("../models");
const ApiController = require("./api.controller")(ParkingTransaction);

class ParkingTransactionController extends ApiController {}

module.exports = ParkingTransactionController;
