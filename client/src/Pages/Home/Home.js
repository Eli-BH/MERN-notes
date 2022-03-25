import axios from "axios";
import { logoutUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [pokemon, setPokemon] = useState("");
  const [currPokemon, setCurrPokemon] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );

      setCurrPokemon(data);
    } catch (error) {
      alert("Please check spelling");
    }
  };

  const routeToPokemon = () => {
    navigate(`/pokemon`);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  console.log(currPokemon);

  return (
    <div>
      <div>
        <h4>User</h4>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>

      <img src="https://source.unsplash.com/random" alt="pokemon title" />

      <div>
        <input
          type="text"
          placeholder="Enter pokemon name or #"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      <div>
        <p>{pokemon}</p>
        <img
          src={currPokemon?.sprites?.front_default}
          alt={pokemon}
          onClick={() => routeToPokemon()}
        />
      </div>
    </div>
  );
};

export default Home;
