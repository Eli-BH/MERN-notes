import { useEffect, useState } from "react";

import axios from "axios";

function UserPage() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchUserPokemon = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(
          "http://localhost:4000/api/function/get-pokemon",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log(data);

        let promises = await Promise.all(
          data.map((item) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon/${item}`)
          )
        );

        setPokemon(promises);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserPokemon();
  }, []);

  console.log(pokemon);

  return (
    <>
      {pokemon
        ? pokemon.map(({ data }, key) => {
            return <h1 key={key}>{data.name}</h1>;
          })
        : null}
    </>
  );
}

export default UserPage;
