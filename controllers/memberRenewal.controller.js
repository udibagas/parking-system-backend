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
    const data = await MemberRenewal.dailyReport(date);
    res.json(data);
  }

  static async report(req, res) {
    const { dateRange } = req.query;
    const [start, end] = dateRange;
    const data = await MemberRenewal.report(start, end);
    res.json(data);
  }
}

module.exports = MemberRenewalController;
