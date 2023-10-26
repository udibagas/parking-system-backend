const NotAuthorizedError = require("../errors/NotAuthorizedError");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    // const user = await User.findByPk(req.user.id, { where: { role: 1 } });
    const user = await User.findOne({ where: { id: req.user.id, role: 1 } });
    if (!user) {
      throw new NotAuthorizedError("Anda tidak berhak mengakses halaman ini");
    }

    next();
  } catch (error) {
    next(error);
  }
};
