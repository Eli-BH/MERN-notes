import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { authSelector, registerUser } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const { token, error, loading } = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/");
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, username }));

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>Register to PokeBank</h2>
        <input
          type="email"
          placeholder="email"
          autoComplete="false"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="false"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          autoComplete="false"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Register</button>
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Register;
