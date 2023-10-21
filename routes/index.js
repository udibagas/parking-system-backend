const fs = require("fs");
const path = require("path");
const { ValidationError } = require("sequelize");
const AuthController = require("../controllers/auth.controller");
const basename = path.basename(__filename);
const router = require("express").Router();

router.post("/login", AuthController.login);
router.use(require("../middlewares/auth.middleware"));

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((route) => {
    route = route.slice(0, -3);
    const controller = require(`../controllers/${route}.controller`);
    const handler = require(`./${route}`)(controller);
    router.use(`/api/${route}`, handler);
  });

router.use((err, req, res, next) => {
  console.error(err);
  const errors = {};

  if (err instanceof ValidationError) {
    err.status = 422;
    for (let e of err.errors) {
      if (errors[e.path] === undefined) {
        errors[e.path] = [];
      }

      errors[e.path].push(e.message);
    }
  }

  const { name, message } = err;
  res.status(err.status || 500).json({ name, message, errors });
});

module.exports = router;
