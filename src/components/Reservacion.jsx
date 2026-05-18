import "./Reservacion.css";

function Reservacion() {
  return (
    <div className="reservacion-container">

      <h1>Formulario de Reservación</h1>

      <form className="reservacion-form">

        <input
          type="text"
          placeholder="Nombre"
        />

        <input
          type="email"
          placeholder="Correo"
        />

        <input
          type="date"
        />

        <select>
          <option>Selecciona una sesión</option>
          <option>Boda</option>
          <option>XV años</option>
          <option>Graduación</option>
          <option>Casual</option>
        </select>

        <button>
          Enviar
        </button>

      </form>

    </div>
  );
}

export default Reservacion;