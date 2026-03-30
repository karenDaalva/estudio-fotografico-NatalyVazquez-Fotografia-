import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>404 - Página no encontrada</h2>
      <Link to="/inicio">Volver al inicio</Link>
    </div>
  );
}

export default NotFound;