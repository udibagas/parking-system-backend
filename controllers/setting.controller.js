const { Setting } = require("../models");
const ApiController = require("./api.controller")(Setting);

class SettingController extends ApiController {}

module.exports = SettingController;
