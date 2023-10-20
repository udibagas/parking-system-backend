const { User } = require("../models");
const ApiController = require("./api.controller")(User);
class UserController extends ApiController {}

module.exports = UserController;
