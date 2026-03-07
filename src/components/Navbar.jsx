import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Nataly Vázquez
      </div>

      <ul className="menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#paquetes">Paquetes</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

    </nav>
  )
}

export default Navbar