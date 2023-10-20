const router = require("express").Router();
const {
  index,
  show,
  create,
  update,
  destroy,
} = require("../controllers/user.controller");

router
  .get("/", index)
  .get("/:id", show)
  .post("/", create)
  .put("/:id", update)
  .delete("/:id", destroy);

module.exports = router;
