const { UserLog } = require("../models");
const ApiController = require("./api.controller")(UserLog);

class UserLogController extends ApiController {}

module.exports = UserLogController;
