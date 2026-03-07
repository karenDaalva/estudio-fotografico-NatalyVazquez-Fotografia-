import Navbar from './components/Navbar'
import Inicio from './components/Inicio'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Packages from "./components/Packages";

function App() {
  return (
    <div>
      <Navbar />

      <Inicio />
      <Galeria />
      <Packages />
      <Contacto />
    </div>
  )
}

export default App
