import React from "react";
import "./Packages.css";

function Packages() {

  const packages = [
    {
      name: "Sesión Básica",
      price: "$1,500",
      description: "Sesión de 1 hora con 10 fotografías editadas"
    },
    {
      name: "Sesión Profesional",
      price: "$3,000",
      description: "Sesión de 2 horas con 25 fotografías editadas"
    },
    {
      name: "Sesión Premium",
      price: "$5,000",
      description: "Sesión completa con 40 fotografías editadas"
    }
  ];

  return (
    <section id="paquetes" lassName="packages-container">
      <h2>Paquetes y Servicios</h2>

      <div className="packages-grid">

        {packages.map((pack, index) => (

          <div className="package-card" key={index}>

            <h3>{pack.name}</h3>

            <p className="price">{pack.price}</p>

            <p>{pack.description}</p>

            <button 
                className="quote-btn"
                onClick={() => window.location.href="#contacto"}
            >
            Solicitar cotización
            </button>

          </div>

        ))}

      </div>

      <ul>
        <li>Sesión fotográfica</li>
        <li>Edición profesional</li>
        <li>Entrega digital</li>
      </ul>

    </section>
  );
}

export default Packages;