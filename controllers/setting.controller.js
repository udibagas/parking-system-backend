const { Setting } = require("../models");
const ApiController = require("./api.controller")(Setting);

class SettingController extends ApiController {
  static async index(req, res, next) {
    const setting = await Setting.findOne();
    res.json(setting);
  }
}

module.exports = SettingController;
