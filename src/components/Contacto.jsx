function Contacto() {
  function enviarFormulario(event) {
    event.preventDefault()
    alert('Mensaje enviado correctamente')
  }

  return (
    <section>
      <h2>Contacto</h2>

      <form onSubmit={enviarFormulario}>
        <div>
          <label>Nombre</label><br />
          <input type="text" required />
        </div>

        <div>
          <label>Correo</label><br />
          <input type="email" required />
        </div>

        <div>
          <label>Mensaje</label><br />
          <textarea required></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto
