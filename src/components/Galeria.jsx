function Galeria() {
  const fotos = [
    { id: 1, titulo: 'Boda', archivo: 'foto1.jpg' },
    { id: 2, titulo: 'Retrato', archivo: 'foto2.jpg' },
    { id: 3, titulo: 'Evento', archivo: 'foto3.jpg' }
  ]

  return (
    <section>
      <h2>Galería</h2>

      <div>
        {fotos.map((foto) => (
          <div key={foto.id}>
            <p>{foto.titulo}</p>
            <img src={`/images/${foto.archivo}`} alt={foto.titulo} width="200" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Galeria
