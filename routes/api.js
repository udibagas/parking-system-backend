const router = require("./index");
const manualOpen = require("../middlewares/manualOpen.middleware");

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

const { login, logout, user, getNavigation } = AuthController;

router
  .post("/auth/login", login)
  // only accessable by authenticated users
  .use(require("../middlewares/auth.middleware"))
  .get("/auth/user", user)
  .post("/auth/logout", logout)
  .get("/getNavigation", getNavigation)
  .get("/getPosByIp", PosController.getPosByIp)
  .resources([
    ["/absensiOperator", AbsensiOperatorController],
    ["/areaParkir", AreaParkirController],
    ["/gateIn", GateInController, ["index"]],
    ["/gateOut", GateOutController, ["index"]],
    ["/groupMember", GroupMemberController, ["index"]],
    ["/jenisKendaraan", JenisKendaraanController, ["index"]],
    ["/kamera", KameraController, ["index"]],
    ["/manualOpenLog", ManualOpenLogController],
    ["/member", MemberController, ["index", "show", "create", "update"]],
    ["/memberRenewal", MemberRenewalController, ["index", "create"]],
    ["/memberVehicle", MemberVehicleController, ["destroy"]],
    [
      "/parkingTransaction",
      ParkingTransactionController,
      ["index", "show", "update", "destroy"],
    ],
    ["/pos", PosController, ["index"]],
    ["/printer", PrinterController, ["index"]],
    ["/setting", SettingController, ["index"]],
    ["/shift", ShiftController],
    ["/snapshot", SnapshotController],
    ["/user", UserController, ["index", "show"]],
  ])
  // only accessable by admin
  .use(require("../middlewares/admin.middleware"))
  .resources([
    ["/gateIn", GateInController, ["create", "update", "destroy"]],
    ["/gateOut", GateOutController, ["create", "update", "destroy"]],
    ["/groupMember", GroupMemberController, ["create", "update", "destroy"]],
    [
      "/jenisKendaraan",
      JenisKendaraanController,
      ["create", "update", "destroy"],
    ],
    ["/kamera", KameraController, ["create", "update", "destroy"]],
    ["/member", MemberController, ["destroy"]],
    ["/memberRenewal", MemberRenewalController, ["update", "destroy"]],
    ["/pos", PosController, ["create", "update", "destroy"]],
    ["/printer", PrinterController, ["create", "update", "destroy"]],
    ["/setting", SettingController, ["create", "update"]],
    ["/user", UserController, ["create", "update", "destroy"]],
    ["/userLog", UserLogController],
  ])
  .post("/parkingTransaction", manualOpen, ParkingTransactionController.create);

module.exports = router;
