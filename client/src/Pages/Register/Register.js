import { Link } from "react-router-dom";
import { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [registered, setRegistered] = useState(true);

  return (
    <div>
      <form>
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
        <button>Register</button>
        <p>Already have an account? </p>
        <Link to="/login">Login</Link>
      </form>

      <button onClick={() => setRegistered(!registered)}>Switch</button>
    </div>
  );
};

export default Register;
