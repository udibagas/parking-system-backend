const { Op } = require("sequelize");
const NotFoundError = require("../errors/NotFoundError");

module.exports = (Model) => {
  class ApiController {
    static async index(req, res, next) {
      let {
        sort_prop,
        sort_order,
        keyword,
        role,
        status,
        paginated,
        page,
        pageSize,
      } = req.query;

      sort_prop ||= "name";
      sort_order ||= "ASC";
      page ||= 1;
      pageSize ||= 10;

      const options = {
        order: [[sort_prop, sort_order]],
        where: {
          name: { [Op.ne]: "controller" },
        },
      };

      if (keyword) {
        options.where = {
          ...options.where,
          [Op.or]: {
            name: { [Op.iLike]: `%${keyword}%` },
            email: { [Op.iLike]: `%${keyword}%` },
          },
        };
      }

      if (role) {
        options.where.role = { [Op.in]: role };
      }

      if (status !== undefined) {
        options.where.status = status;
      }

      if (paginated) {
        options.limit = +pageSize;
        options.offset = (page - 1) * pageSize;
      }

      try {
        if (paginated) {
          const users = await Model.findAndCountAll(options);
          return res.json(users);
        }

        const users = await Model.findAll(options);
        res.json(users);
      } catch (error) {
        next(error);
      }
    }

    static async show(req, res, next) {
      try {
        const user = await Model.findByPk(req.params.id);
        if (!user) throw new NotFoundError();
        res.json(user);
      } catch (error) {
        next(error);
      }
    }

    static async create(req, res, next) {
      try {
        const user = await Model.create(req.body);
        res.status(201).json({ message: "User telah disimpan", data: user });
      } catch (error) {
        next(error);
      }
    }

    static async update(req, res, next) {
      try {
        const user = Model.findByPk(req.params.id);
        if (!user) throw new NotFoundError();
        await user.update(req.body);
        res.json({ message: "User telah diupdate", data: user });
      } catch (error) {
        next(error);
      }
    }

    static async destroy(req, res, next) {
      try {
        const user = await Model.findByPk(req.params.id);
        if (!user) throw new NotFoundError();
        await user.destroy();
        res.json({ message: "User telah dihapus" });
      } catch (error) {
        next(error);
      }
    }
  }

  return ApiController;
};
