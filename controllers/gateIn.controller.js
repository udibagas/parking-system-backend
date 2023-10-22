const { GateIn } = require("../models");
const ApiController = require("./api.controller")(GateIn);

class GateInController extends ApiController {
  static async index(req, res, next) {
    let { paginated, page, pageSize } = req.query;

    page ||= 1;
    pageSize ||= 10;

    const options = {
      order: [["nama", "asc"]],
      where: {},
    };

    if (paginated) {
      options.limit = +pageSize;
      options.offset = (page - 1) * pageSize;
    }

    try {
      if (paginated) {
        let { count: total, rows: data } = await GateIn.findAndCountAll(
          options
        );

        data = await Promise.all(
          data.map(async (d) => {
            return { ...d.toJSON(), kameraList: await d.getKameraList() };
          })
        );

        console.log(data);

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

      const instances = await GateIn.findAll(options);
      res.json(instances);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = GateInController;
