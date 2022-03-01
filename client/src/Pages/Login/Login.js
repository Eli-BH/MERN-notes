import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login to PokeBank</h2>

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
        <button type="submit">Login</button>
        <p>Don't have an account? </p>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default Login;
