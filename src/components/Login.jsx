import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  if (user === "admin" && password === "1234") {
    
    localStorage.setItem("login", "true"); 

    navigate("/home");

  } else {
    alert("Datos incorrectos");
  }
};

  return (
    <div className="login-wrapper">

      <div className="login-container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Ingresar</button>

        </form>

      </div>

    </div>
  );
}

export default Login;