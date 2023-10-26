const { User } = require("../models");
const ApiController = require("./api.controller")(User);
const isAdmin = require("../middlewares/admin.middleware");

class UserController extends ApiController {
  static index(req, res, next) {
    isAdmin(req, res, (err) => {
      if (err) return next(err);
      super.index(req, res);
    });
  }
}

module.exports = UserController;
