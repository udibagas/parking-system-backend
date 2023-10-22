const { Pos } = require("../models");
const ApiController = require("./api.controller")(Pos);

class PosController extends ApiController {
  static async getPosByIp(req, res) {
    console.log(req.ips);
    const pos = await Pos.findOne({ where: { ip_address: req.ip } });

    if (!pos) {
      return res.status(404).json({ message: "POS TIDAK TERDAFTAR" });
    }

    res.json(pos);
  }
}

module.exports = PosController;
