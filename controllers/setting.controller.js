const { Setting } = require("../models");
const ApiController = require("./api.controller")(Setting);

class SettingController extends ApiController {
  static async index(req, res, next) {
    try {
      const setting = await Setting.findOne();
      res.json(setting);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SettingController;
