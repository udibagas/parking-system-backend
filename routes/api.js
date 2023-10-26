const router = require("./router");
const isAdmin = require("../middlewares/admin.middleware");

const {
  AbsensiOperatorController,
  AreaParkirController,
  AuthController,
  GateInController,
  GateOutController,
  GroupMemberController,
  JenisKendaraanController,
  KameraController,
  ManualOpenLogController,
  MemberController,
  MemberRenewalController,
  MemberVehicleController,
  ParkingTransactionController,
  PosController,
  PrinterController,
  SettingController,
  ShiftController,
  SnapshotController,
  UserController,
  UserLogController,
} = require("../controllers");
const asyncHandler = require("express-async-handler");

const { login, logout, user, getNavigation } = AuthController;

router
  .post("/auth/login", asyncHandler(login))
  // only accessable by authenticated users
  .use(require("../middlewares/auth.middleware"))
  .get("/auth/user", asyncHandler(user))
  .post("/auth/logout", asyncHandler(logout))
  .get("/getNavigation", asyncHandler(getNavigation))
  .get("/getPosByIp", asyncHandler(PosController.getPosByIp))
  .resources([
    ["/absensiOperator", AbsensiOperatorController],
    ["/areaParkir", AreaParkirController],
    ["/gateIn", GateInController, ["index"]],
    ["/gateOut", GateOutController],
    ["/groupMember", GroupMemberController, ["index"]],
    ["/jenisKendaraan", JenisKendaraanController],
    ["/kamera", KameraController],
    ["/manualOpenLog", ManualOpenLogController],
    ["/member", MemberController],
    ["/memberRenewal", MemberRenewalController],
    ["/memberVehicle", MemberVehicleController],
    ["/parkingTransaction", ParkingTransactionController],
    ["/pos", PosController],
    ["/printer", PrinterController],
    ["/setting", SettingController],
    ["/shift", ShiftController],
    ["/snapshot", SnapshotController],
    ["/user", UserController],
    ["/userLog", UserLogController],
  ])
  .use(isAdmin)
  .resource("/user", UserController, ["index", "create", "destroy"])
  .resource("/gateIn", GateInController, ["create", "update", "destroy"])
  .resource("/gateOut", GateOutController, ["create", "update", "destroy"])
  .resource("/groupMember", GateOutController, ["create", "update", "destroy"]);

module.exports = router;
