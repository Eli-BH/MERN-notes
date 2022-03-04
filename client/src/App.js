import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
