import { useEffect, useState } from "react";

import axios from "axios";

function UserPage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchUserPokemon = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:4000/api/function/pokemon",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log(data);

        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserPokemon();
  }, []);

  console.log(pokemon);

  const getPokemonInfo = async (id) => {
    try {
      let { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(data);
      return data.name;
    } catch (error) {
      console(error);
    }
  };

  return (
    <>
      {pokemon &&
        pokemon.map(async (poke) => {
          console.log(await getPokemonInfo(poke).toString());

          return <h1>hello</h1>;
        })}
    </>
  );
}

export default UserPage;
