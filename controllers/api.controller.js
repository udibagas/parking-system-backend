const { Op } = require("sequelize");
const NotFoundError = require("../errors/NotFoundError");

module.exports = (Model) => {
  class ApiController {
    async index(req, res, next) {
      console.log(this);
      let { sort_prop, sort_order, keyword, paginated, page, pageSize } =
        req.query;

      sort_prop ||= "name";
      sort_order ||= "ASC";
      page ||= 1;
      pageSize ||= 10;

      const options = {
        order: [[sort_prop, sort_order]],
        where: {},
      };

      if (keyword && Model.searchable.length > 0) {
        options.where[Op.or] = {};
        for (let field of Model.searchable) {
          options.where[Op.or][field] = { [Op.like]: `%${keyword}%` };
        }
      }

      Model.filterable.forEach((col) => {
        if (req.query[col] !== undefined) {
          options.where[col] = {
            [Op.in]: req.query[col],
          };
        }
      });

      if (paginated) {
        options.limit = +pageSize;
        options.offset = (page - 1) * pageSize;
      }

      try {
        if (paginated) {
          const { count: total, rows: data } = await Model.findAndCountAll(
            options
          );
          const { offset } = options;
          return res.json({
            meta: {
              total,
              from: offset + 1,
              to: offset + data.length,
            },
            data,
          });
        }

        const users = await Model.findAll(options);
        res.json(users);
      } catch (error) {
        next(error);
      }
    }

    async show(req, res, next) {
      try {
        const user = await Model.findByPk(req.params.id);
        if (!user) throw new NotFoundError();
        res.json(user);
      } catch (error) {
        next(error);
      }
    }

    async create(req, res, next) {
      try {
        const user = await Model.create(req.body);
        res.status(201).json({ message: "User telah disimpan", data: user });
      } catch (error) {
        next(error);
      }
    }

    async update(req, res, next) {
      try {
        const user = Model.findByPk(req.params.id);
        if (!user) throw new NotFoundError();
        await user.update(req.body);
        res.json({ message: "User telah diupdate", data: user });
      } catch (error) {
        next(error);
      }
    }

    async destroy(req, res, next) {
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
