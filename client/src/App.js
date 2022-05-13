import "./App.scss";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PokemonPage from "./Pages/PokemonPage/PokemonPage";
import Register from "./Pages/Register/Register";
import UserPage from "./Pages/UserPage/UserPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />
        <Route path="user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
