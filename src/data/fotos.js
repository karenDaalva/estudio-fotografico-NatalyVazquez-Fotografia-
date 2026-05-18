const baseUrl =
  import.meta.env.MODE === "production"
    ? "/estudio-fotografico-NatalyVazquez-Fotografia-"
    : ""

const fotos = [
  {
    id: 1,
    src: `${baseUrl}/images/foto1.jpg`,
    alt: "Sesión de retrato",
    categoria: "Categoria 1"
  },
  {
    id: 2,
    src: `${baseUrl}/images/foto2.jpg`,
    alt: "Fotografía de pareja",
    categoria: "Categoria 1"
  },
  {
    id: 3,
    src: `${baseUrl}/images/foto3.jpg`,
    alt: "Sesión artística",
    categoria: "Categoria 1"
  }
]

export default fotos