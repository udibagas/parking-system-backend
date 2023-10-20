const fs = require("fs");
const path = require("path");
const { ValidationError } = require("sequelize");
const basename = path.basename(__filename);
const router = require("express").Router();

const routes = fs.readdirSync(__dirname).filter((file) => {
  return (
    file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  );
});

for (let route of routes) {
  route = route.slice(0, -3);
  router.use(`/${route}`, require(`./${route}`));
}

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
