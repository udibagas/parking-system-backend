const { ParkingTransaction, Shift } = require("../models");
const ApiController = require("./api.controller")(ParkingTransaction);

class ParkingTransactionController extends ApiController {
  static methods = ["index", "show", "create", "update", "destroy"];

  static async create(req, res) {
    req.body.shift_id = await Shift.getShiftIdByTime(req.body.time_out);
    req.body.operator = req.user.name;
    super.create(req, res);
  }
}

module.exports = ParkingTransactionController;
