import { useState } from 'react'

function Contacto() {
  const [nombre, setNombre] = useState('')
  const [mensaje, setMensaje] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (nombre === '' || mensaje === '') {
      alert('Por favor completa todos los campos')
      return
    }

    alert('Mensaje enviado correctamente')
    setNombre('')
    setMensaje('')
  }

  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <textarea
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto