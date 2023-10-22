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

  static async logout(req, res) {
    delete req.user;
    res.status(204).send("");
  }

  static async user(req, res) {
    res.json({ user: req.user });
  }

  static getNavigation(req, res) {
    const nav = [
      { label: "Home", icon: "el-icon-s-home", path: "/" },
      { label: "Transaksi", icon: "el-icon-document-copy", path: "/transaksi" },
      { label: "Keanggotaan", icon: "el-icon-bank-card", path: "/member" },
    ];

    const adminNav = [
      { label: "Laporan", icon: "el-icon-data-analysis", path: "/report" },
      { label: "User", icon: "el-icon-user", path: "/user" },
      { label: "Log", icon: "el-icon-bell", path: "/notification" },
      { label: "Pengaturan", icon: "el-icon-setting", path: "/setting" },
    ];

    req.user.role == 1 ? res.json([...nav, ...adminNav]) : res.json(nav);
  }
}

module.exports = AuthController;
