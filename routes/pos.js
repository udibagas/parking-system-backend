const router = require("express").Router();

module.exports = (controller) => {
  const { index, show, create, update, destroy, getPosByIp } = controller;
  return router
    .get("/", index)
    .get("/:id", show)
    .post("/", create)
    .put("/:id", update)
    .delete("/:id", destroy);
};
