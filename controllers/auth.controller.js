const { compareSync } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { User } = require("../models");
const { Op } = require("sequelize");
const NotAuthorizedError = require("../errors/NotAuthorizedError");

class AuthController {
  static async login(req, res, next) {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        const error = new Error("Username & password harus diisi");
        error.status = 422;
        throw error;
      }

      const user = await User.findOne({
        where: {
          [Op.or]: {
            name: email,
            email,
          },
        },
      });

      if (!user) throw new NotAuthorizedError();
      if (!compareSync(password, user.password)) {
        throw new NotAuthorizedError();
      }

      const token = sign(
        { user_id: user.id, email: user.email },
        process.env.TOKEN_KEY
      );

      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
