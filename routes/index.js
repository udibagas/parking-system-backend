const router = require("express").Router();
const asyncHandler = require("express-async-handler");

router.resource = function (
  path,
  controller,
  methods = ["index", "show", "create", "update", "destroy"]
) {
  const { index, show, create, update, destroy } = controller; // class with static method
  for (let m of methods) {
    if (m == "index") this.get(path, asyncHandler(index));
    if (m == "show") this.get(`${path}/:id`, asyncHandler(show));
    if (m == "create") this.post(path, asyncHandler(create));
    if (m == "update") this.put(`${path}/:id`, asyncHandler(update));
    if (m == "destroy") this.delete(`${path}/:id`, asyncHandler(destroy));
  }

  console.log(controller.name);

  return this;
};

router.resources = function (resources) {
  for (let resource of resources) {
    const [path, controller, methods] = resource;
    this.resource(path, controller, methods);
  }

  return this;
};

module.exports = router;
