const { MemberRenewal } = require("../models");
const ApiController = require("./api.controller")(MemberRenewal);

class MemberRenewalController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];

  static async create(req, res) {
    req.body.user_id = req.user.id;
    const data = await MemberRenewal.create(req.body);
    res.status(201).json({ message: "Data telah disimpan", data });
  }
}

module.exports = MemberRenewalController;
