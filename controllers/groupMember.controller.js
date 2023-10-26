const { GroupMember } = require("../models");
const ApiController = require("./api.controller")(GroupMember);

class GroupMemberController extends ApiController {
  static methods = ["index", "create", "update", "destroy"];
}

module.exports = GroupMemberController;
