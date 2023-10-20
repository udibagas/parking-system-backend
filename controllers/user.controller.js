const { User } = require("../models");

exports.index = async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["name", "ASC"]],
    });

    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.show = (req, res) => {
  res.send("show");
};

exports.create = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.update = (req, res) => {
  res.send("update");
};

exports.destroy = (req, res) => {
  res.send("delete");
};
