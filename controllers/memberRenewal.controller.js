const { MemberRenewal, sequelize, Sequelize, Member } = require("../models");
const ApiController = require("./api.controller")(MemberRenewal);

class MemberRenewalController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];

  static async create(req, res) {
    req.body.user_id = req.user.id;
    const data = await MemberRenewal.create(req.body);
    res.status(201).json({ message: "Data telah disimpan", data });
  }

  static async reportDaily(req, res) {
    const { date } = req.query;

    const data = await MemberRenewal.findAll({
      where: Sequelize.literal(`DATE(MemberRenewal.updatedAt) = '${date}'`),
      attributes: ["id", "jumlah"],
      include: {
        association: "member",
        attributes: ["nama", "nomor_kartu"],
        include: {
          association: "vehicles",
          attributes: ["plat_nomor"],
        },
      },
    });

    res.json(data);
  }
}

module.exports = MemberRenewalController;
