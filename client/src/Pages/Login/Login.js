import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, authSelector } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, token, loading } = useSelector(authSelector);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));

    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      navigate("/");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to PokeBank</h2>

        <input
          type="email"
          placeholder="email"
          autoComplete="false"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          autoComplete="false"
          id="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" id="login-btn">
          Login
        </button>
        <p>Don't have an account? </p>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
