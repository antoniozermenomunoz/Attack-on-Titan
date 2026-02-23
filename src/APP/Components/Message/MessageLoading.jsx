import logo from "../../../../public/IMG/Logo.png";
import "./MessageLoading.css";

<img src={logo} alt="Logo" className="aot-logo-img" />;

function MessageLoading() {
  return (
    <div className="aot-loader-overlay">
      <div className="aot-loader-content text-center">
        {/* Contenedor del ícono con efecto de pulso */}
        <div className="aot-spinner-container mb-4">
          <div className="aot-pulse-ring"></div>
          <img src={logo} alt="Cargando..." className="aot-loader-logo" />
        </div>

        {/* Texto de estado militar */}
        <h2 className="aot-loader-text">Cargando ....</h2>
        <div className="aot-progress-bar-container">
          <div className="aot-progress-bar-fill"></div>
        </div>
      </div>
    </div>
  );
}

export { MessageLoading };
