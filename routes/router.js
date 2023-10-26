const router = require("express").Router();
const asyncHandler = require("express-async-handler");

router.resource = function (path, controller, methods) {
  const { index, show, create, update, destroy } = controller; // class with static method
  methods ||= controller.methods;

  for (let m of methods) {
    if (m == "index") this.get(path, asyncHandler(index));
    if (m == "show") this.get(`${path}/:id`, asyncHandler(show));
    if (m == "create") this.post(path, asyncHandler(create));
    if (m == "update") this.put(`${path}/:id`, asyncHandler(update));
    if (m == "destroy") this.delete(`${path}/:id`, asyncHandler(destroy));
  }

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
