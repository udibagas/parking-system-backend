const { UserLog } = require("../models");
const ApiController = require("./api.controller")(UserLog);

class UserLogController extends ApiController {
  static methods = ["index", "destroy"];
}

module.exports = UserLogController;
