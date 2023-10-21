const { ManualOpenLog } = require("../models");
const ApiController = require("./api.controller")(ManualOpenLog);

class ManualOpenLogController extends ApiController {}

module.exports = ManualOpenLogController;
