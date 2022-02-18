const express = require("express");
const router = express.Router();
const {
  authRegister,
  authLogin,
  home,
} = require("../controller/authControllers");
const protect = require("../middleware/requireAuth");

router.post("/register", authRegister);

router.post("/login", authLogin);

router.get("/home", protect, home);

module.exports = router;
