const protect = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();
const {
  addPokemon,
  removePokemon,
  getPokemon,
} = require("../controller/functionsControllers");

router.post("/add-pokemon", protect, addPokemon);

router.patch("/del-pokemon", protect, removePokemon);

router.get("/get-pokemon", protect, getPokemon);

module.exports = router;
