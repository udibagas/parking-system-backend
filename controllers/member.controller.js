const { Member } = require("../models");
const ApiController = require("./api.controller")(Member);

class MemberController extends ApiController {}

module.exports = MemberController;
