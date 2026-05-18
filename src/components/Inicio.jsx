function Inicio() {
    const baseUrl =
    import.meta.env.MODE === "production"
      ? "/estudio-fotografico-NatalyVazquez-Fotografia-"
      : ""

  return (
    <section id="inicio" className="inicio">
      <h1>Nataly Vázquez Fotografía</h1>
      <p>Capturando momentos únicos e inolvidables.</p>
      <img 
        src={`${baseUrl}/images/foto1.jpg`}
        alt="Fotografía principal"
        className="imagen-principal"
      />
      <a href="#galeria" className="btn-ver">Ver galería</a>
    </section>
  )
}

export default Inicio