const User = require("../models/User");

exports.addPokemon = async (req, res) => {
  const { pokemonId } = req.body;
  const { email } = req.user;

  try {
    // //look for the user
    const user = await User.findOne({ email });
    //push pokemon into the user pokemon array
    // await User.updateOne(
    //   { email },
    //   { $set: { pokemon: [pokemonId] } },
    //   function (err, result) {
    //     if (err) {
    //       res.send(err);
    //     } else {
    //       res.json(result);
    //     }
    //   }

    // );

    /**
     * const items = ['a', 'b', 'c', 'd', 'e', 'f']
        const valueToRemove = 'c'
const filteredItems = items.filter(item => item !== valueToRemove)
// ["a", "b", "d", "e", "f"]
     */
    await user.pokemon.push(pokemonId);
    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
