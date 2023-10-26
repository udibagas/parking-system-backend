const NotFoundError = require("../errors/NotFoundError");
const { Member, MemberVehicle, sequelize } = require("../models");
const ApiController = require("./api.controller")(Member);

class MemberController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];

  static async create(req, res) {
    const data = await sequelize.transaction(async (t) => {
      const member = await Member.create(req.body, {
        transaction: t,
        include: "vehicles",
      });
      return member;
    });

    res.status(201).json({ message: "Data telah ditambahkan", data });
  }

  static async update(req, res) {
    const member = await Member.findByPk(req.params.id);
    if (!member) throw new NotFoundError();

    const data = await sequelize.transaction(async (t) => {
      member.update(req.body, { transaction: t });
      await MemberVehicle.destroy({ where: { member_id: member.id } });

      if (req.body.vehicles?.length > 0) {
        await MemberVehicle.bulkCreate(
          req.body.vehicles.map((vehicle) => {
            return { ...vehicle, member_id: member.id };
          })
        );
      }

      member.reload();
      return member;
    });

    res.status(200).json({
      message: "Data telah diupdate",
      data,
    });
  }
}

module.exports = MemberController;
