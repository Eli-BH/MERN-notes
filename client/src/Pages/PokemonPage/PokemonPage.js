import { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

function PokemonPage() {
  const [currPokemon, setCurrPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const id = params.id;
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        setCurrPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonInfo();
  }, [params.id]);

  console.log(currPokemon.abilities);
  return currPokemon ? (
    <div className="pokemon-container">
      <h4>{currPokemon.name}</h4>

      <p>{currPokemon.base_experience}</p>
      {currPokemon.abilities
        ? currPokemon?.abilities.map(({ ability }, index) => (
            <p key={index}>{ability.name}</p>
          ))
        : null}

      <p>Forms</p>
      {currPokemon.forms
        ? currPokemon?.forms.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))
        : null}
    </div>
  ) : null;
}

export default PokemonPage;

//https://github.com/Eli-BH/pokemon-project
