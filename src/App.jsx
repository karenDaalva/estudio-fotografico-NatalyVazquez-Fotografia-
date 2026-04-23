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

/* Layout con navbar + contenido */
function Layout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/paquetes" element={<Packages />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* ADMIN DENTRO DEL LAYOUT */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* SITIO PRINCIPAL */}
        <Route path="/*" element={<Layout />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;