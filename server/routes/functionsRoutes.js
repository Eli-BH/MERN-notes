const protect = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();
const { addPokemon } = require("../controller/functionsControllers");

router.post("/add-pokemon", protect, addPokemon);

module.exports = router;
