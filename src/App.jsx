import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Galeria from "./components/Galeria";
import Packages from "./components/Packages";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";
import NotFound from "./components/NotFound";
import Reservacion from "./components/Reservacion";

function Layout() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/galeria" element={<Galeria />} />

        <Route path="/paquetes" element={<Packages />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/reservacion" element={<Reservacion />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/*" element={<Layout />} />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;