const NotFoundError = require("../errors/NotFoundError");

module.exports = (Model) => {
  class ApiService {
    static async all(options) {
      const instances = await Model.findAll(options);
      return instances;
    }

    static async paginate(options) {
      const { count: total, rows: data } = await Model.findAndCountAll(options);
      return { total, data };
    }

    static async show(id) {
      const instance = Model.findByPk(id);
      if (!instance) throw new NotFoundError();
      return instance;
    }

    static async create(data) {
      const instance = await Model.create(data);
      return instance;
    }

    static async update(data, id) {
      const instance = Model.findByPk(id);
      if (!instance) throw new NotFoundError();
      await instance.update(data);
      return instance;
    }

    static async destroy(id) {
      const instance = Model.findByPk(id);
      if (!instance) throw new NotFoundError();
      await instance.destroy();
    }
  }

  return ApiService;
};
