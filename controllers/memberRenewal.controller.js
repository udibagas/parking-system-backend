const { MemberRenewal } = require("../models");
const ApiController = require("./api.controller")(MemberRenewal);

class MemberRenewalController extends ApiController {
  static async create(req, res, next) {
    req.body.user_id = req.user.id;

    try {
      const data = await MemberRenewal.create(req.body);
      res.status(201).json({ message: "Data telah disimpan", data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = MemberRenewalController;
