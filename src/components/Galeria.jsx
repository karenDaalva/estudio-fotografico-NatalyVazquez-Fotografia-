import "./Galeria.css"
import { useState } from "react"
import fotos from "../data/fotos"

function Galeria() {

  const [imagenActiva, setImagenActiva] = useState(null)

  return (
    <section id="galeria" className="galeria">

      <h2>Galería</h2>

      <div className="contenedor-galeria">

        {fotos.map((foto) => (
          <img
            key={foto.id}
            src={foto.src}
            alt={foto.alt}
            onClick={() => setImagenActiva(foto.src)}
          />
        ))}

      </div>

      {imagenActiva && (
        <div className="lightbox" onClick={() => setImagenActiva(null)}>
          <img src={imagenActiva} alt="Foto ampliada" />
        </div>
      )}

    </section>
  )
}

export default Galeria