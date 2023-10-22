const { User } = require("../models");
const NotAuthorizedError = require("../errors/NotAuthorizedError");
const { compareSync } = require("bcryptjs");

module.exports = async (req, res, next) => {
  const { username, password, manual } = req.body;
  if (!manual) {
    return next();
  }

  req.body.user_id = req.user.id;

  try {
    const user = await User.findOne({ where: { name: username } });
    if (!user) throw new NotAuthorizedError();
    if (!compareSync(password, user.password)) {
      throw new NotAuthorizedError();
    }

    next();
  } catch (error) {
    next(error);
  }
};
