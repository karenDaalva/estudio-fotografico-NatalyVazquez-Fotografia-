import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Packages from "./components/Packages";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


function Home(){
  return (
    <>
      <Navbar />
      <Inicio />
      <Galeria />
      <Packages />
      <Contacto />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/home" 
          element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;