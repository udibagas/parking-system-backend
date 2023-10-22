const router = require("express").Router();
const asyncHandler = require("express-async-handler");

router.resource = function (
  path,
  controller,
  methods = ["index", "show", "create", "update", "destroy"]
) {
  const { index, show, create, update, destroy } = controller; // class with static method
  if (methods.includes("index")) this.get(path, asyncHandler(index));
  if (methods.includes("show")) this.get(`${path}/:id`, asyncHandler(show));
  if (methods.includes("create")) this.post(path, asyncHandler(create));
  if (methods.includes("update")) this.put(`${path}/:id`, asyncHandler(update));
  if (methods.includes("destroy"))
    this.delete(`${path}/:id`, asyncHandler(destroy));
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
