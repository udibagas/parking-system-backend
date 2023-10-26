const { Op } = require("sequelize");
const NotFoundError = require("../errors/NotFoundError");

module.exports = (Model) => {
  class ApiController {
    static methods = ["index", "show", "create", "update", "destroy"];

    static async index(req, res) {
      let { sort_prop, sort_order, keyword, paginated, page, pageSize } =
        req.query;

      sort_prop ||= Model.defaultSort || "id";
      sort_order ||= "ASC";
      page ||= 1;
      pageSize ||= 10;

      const options = {
        order: [[sort_prop, sort_order]],
        where: {},
      };

      if (keyword && Model.searchable?.length > 0) {
        options.where[Op.or] = {};
        for (let field of Model.searchable) {
          options.where[Op.or][field] = { [Op.like]: `%${keyword}%` };
        }
      }

      if (Model.filterable) {
        Model.filterable.forEach((col) => {
          if (req.query[col] !== undefined) {
            options.where[col] = {
              [Op.in]: req.query[col],
            };
          }
        });
      }

      if (paginated) {
        options.limit = +pageSize;
        options.offset = (page - 1) * pageSize;
      }

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

      const instances = await Model.findAll(options);
      res.json(instances);
    }

    static async show(req, res) {
      const instance = await Model.findByPk(req.params.id);
      if (!instance) throw new NotFoundError();
      res.json(instance);
    }

    static async create(req, res) {
      const data = await Model.create(req.body);
      res.status(201).json({ message: "Data telah disimpan", data });
    }

    static async update(req, res) {
      const data = await Model.findByPk(req.params.id);
      if (!data) throw new NotFoundError();
      await data.update(req.body);
      res.json({ message: "Data telah diupdate", data });
    }

    static async destroy(req, res) {
      const instance = await Model.findByPk(req.params.id);
      if (!instance) throw new NotFoundError();
      await instance.destroy();
      res.json({ message: "Data telah dihapus" });
    }
  }

  return ApiController;
};
