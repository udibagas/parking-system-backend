const router = require("./index");

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
    ["/gateIn", GateInController],
    ["/gateOut", GateOutController],
    ["/groupMember", GroupMemberController],
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
  ]);

module.exports = router;
