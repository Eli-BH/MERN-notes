const User = require("../models/User");
const axios = require("axios");

exports.addPokemon = async (req, res) => {
  const { pokemonId } = req.body;
  const { email } = req.user;

  try {
    //look for the user
    const user = await User.findOne({ email });

    await user.pokemon.push(pokemonId);
    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.removePokemon = async (req, res) => {
  const { pokemonId } = req.body;
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });

    user.pokemon = await user.pokemon.filter((item) => item !== pokemonId);
    user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.getPokemon = async (req, res) => {
  const { email } = req.user;

  try {
    const user = await User.findOne({ email });

    res.send(user.pokemon);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
