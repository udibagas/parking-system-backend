const fs = require("fs");
const path = require("path");
const { pascal } = require("../helpers/string");
const basename = path.basename(__filename);
const controllers = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file !== "api.controller.js"
    );
  })
  .forEach((file) => {
    const controller = require(path.join(__dirname, file));
    const name = pascal(file.replace(".controller.js", "Controller"));
    controllers[name] = controller;
  });

module.exports = controllers;
