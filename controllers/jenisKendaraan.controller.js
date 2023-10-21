const { JenisKendaraan } = require("../models");
const ApiController = require("./api.controller")(JenisKendaraan);

class JenisKendaraanController extends ApiController {}

module.exports = JenisKendaraanController;
