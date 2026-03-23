import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isAuth = localStorage.getItem("login");

  return isAuth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;