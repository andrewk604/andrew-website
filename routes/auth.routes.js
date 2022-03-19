const Router = require("express");
const router = Router();
const controller = require("../middleware/auth.controller");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/auth.middleware");
const roleMiddleware = require("../middleware/role.middleware");

router.post(
  "/register",
  [
    check("username", "Username cannot be empty").notEmpty(),
    check(
      "password",
      "Password length must be at least 8 symbols and max 32 symbols"
    ).isLength({ min: 8, max: 32 })
  ],
  controller.register
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUser);
router.get("/self", authMiddleware, controller.getCurrentUser);

module.exports = router;
