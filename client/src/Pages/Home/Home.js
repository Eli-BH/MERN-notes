import { useEffect, useState } from "react";

import ButtonComponent from "../../components/ButtonComponent";
import axios from "axios";
import { logoutUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pokemon, setPokemon] = useState("");
  const [currPokemon, setCurrPokemon] = useState({});
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/auth/home",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  console.log(user);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
      );

      setCurrPokemon(data);
    } catch (error) {
      alert("Please check spelling");
    }
  };

  const routeToPokemon = () => {
    const id = currPokemon.id;
    navigate(`/pokemon/${id}`);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  console.log(currPokemon);

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-title">MERN-Dex</div>
        <div className="navbar-auth">
          <h4>{user ? user.username : "user"}</h4>
          <ButtonComponent action={handleLogout}>Logout</ButtonComponent>
        </div>
      </div>

      <h4 className="title">MERN-Dex</h4>

      <div>
        <input
          type="text"
          placeholder="Enter pokemon name or #"
          className="search-input"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        />
        <ButtonComponent action={handleSearch}>Search</ButtonComponent>
      </div>

      <div style={{ height: 480 }}>
        <img
          src={currPokemon?.sprites?.front_default}
          className="pokemon-img"
          alt={pokemon}
          onClick={() => routeToPokemon()}
        />
      </div>
    </div>
  );
};

export default Home;
