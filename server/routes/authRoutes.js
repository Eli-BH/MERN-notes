const express = require("express");
const router = express.Router();
const { authRegister } = require("../controller/authControllers");

router.post("/register", authRegister);

module.exports = router;
