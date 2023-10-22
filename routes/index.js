const router = require("express").Router();

router.resource = function (
  path,
  controller,
  methods = ["index", "show", "create", "update", "destroy"]
) {
  const { index, show, create, update, destroy } = controller; // class with static method
  if (methods.includes("index")) this.get(path, index);
  if (methods.includes("show")) this.get(`${path}/:id`, show);
  if (methods.includes("create")) this.post(path, create);
  if (methods.includes("update")) this.put(`${path}/:id`, update);
  if (methods.includes("destroy")) this.delete(`${path}/:id`, destroy);
  return this;
};

router.resources = function (resources) {
  for (let resource of resources) {
    const [path, controller, methods] = resource;
    this.resource(path, controller, methods);
  }
};

module.exports = router;
