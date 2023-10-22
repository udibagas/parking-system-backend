const { verify } = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  const error = new Error();
  error.status = 403;

  if (bearerHeader === undefined) {
    error.message = "Token is required";
    return next(error);
  }

  const token = bearerHeader.split(" ")[1];

  if (!token) {
    error.message = "Token is required";
    return next(error);
  }

  try {
    const decoded = verify(token, process.env.TOKEN_KEY);
    req.user = await User.findByPk(decoded.user_id);

    if (!req.user) {
      error.message = "Invalid user";
      throw error;
    }

    next();
  } catch (error) {
    next(error);
  }
};
