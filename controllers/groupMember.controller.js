const { GroupMember } = require("../models");
const ApiController = require("./api.controller")(GroupMember);

class GroupMemberController extends ApiController {}

module.exports = GroupMemberController;
