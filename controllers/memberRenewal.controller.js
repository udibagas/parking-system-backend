const { MemberRenewal } = require("../models");
const ApiController = require("./api.controller")(MemberRenewal);

class MemberRenewalController extends ApiController {}

module.exports = MemberRenewalController;
