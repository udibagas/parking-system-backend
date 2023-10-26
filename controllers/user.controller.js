const { User } = require("../models");
const ApiController = require("./api.controller")(User);
// const isAdmin = require("../middlewares/admin.middleware");

class UserController extends ApiController {
  // static async index(req, res) {
  //   await isAdmin(req, res, () => super.index(req, res));
  // }
}

module.exports = UserController;
