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

router.post("/auth/login", login);
router.use(require("../middlewares/auth.middleware"));
router.get("/auth/user", user);
router.post("/auth/logout", logout);
router.get("/getNavigation", getNavigation);
router.get("/getPosByIp", PosController.getPosByIp);

router.resources([
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
  ["/memberVehicle", MemberVehicleController, ["destroy"]],
  [
    "/parkingTransaction",
    ParkingTransactionController,
    ["index", "show", "update", "destroy"],
  ],
  ["/pos", PosController],
  ["/printer", PrinterController],
  ["/setting", SettingController, ["index", "create", "update"]],
  ["/shift", ShiftController],
  ["/snapshot", SnapshotController],
  ["/user", UserController],
  ["/userLog", UserLogController],
]);

router.post(
  "/parkingTransaction",
  manualOpen,
  ParkingTransactionController.create
);

module.exports = router;
