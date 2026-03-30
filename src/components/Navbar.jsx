import "./Navbar.css"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation(); // 🔥 clave
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loginStatus = localStorage.getItem("login");
      setIsAuth(!!loginStatus);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("login");
    setIsAuth(false);
    navigate("/");
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  return (
    <nav className="navbar">

      <div className="logo">Nataly Vázquez</div>

      <ul className="menu">

        {location.pathname !== "/" && (
          <li><Link to="/">Inicio</Link></li>
        )}

        {location.pathname !== "/galeria" && (
          <li><Link to="/galeria">Galería</Link></li>
        )}

        {location.pathname !== "/paquetes" && (
          <li><Link to="/paquetes">Paquetes</Link></li>
        )}

        {location.pathname !== "/contacto" && (
          <li><Link to="/contacto">Contacto</Link></li>
        )}

      </ul>

      {/* 🔥 BOTONES DINÁMICOS */}
      {isAuth ? (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleAdmin}>Admin</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleAdmin}>Admin</button>
      )}

    </nav>
  );
}

export default Navbar;