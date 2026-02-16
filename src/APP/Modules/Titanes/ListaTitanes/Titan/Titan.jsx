import { MessageLoading } from "./../../../../Components/Message/MessageLoading";
import { useParams, useNavigate } from "react-router-dom";
import React from "react";
import "./Titan.css";

function Titan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [titan, setTitan] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const Atras = () => navigate("/Titanes");

  React.useEffect(() => {
    const fetchTitan = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.attackontitanapi.com/titans/${id}`,
        );

        if (!response.ok) {
          throw new Error("Error al cargar titán");
        }

        const data = await response.json();
        setTitan(data);
      } catch (error) {
        console.error("Error cargando titán:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTitan();
  }, [id]);

  if (loading) return <MessageLoading />;
  if (!titan) return <div>No se encontró el titán</div>;

  return (
    <div
      className="aot-modal-overlay d-flex align-items-center justify-content-center"
      onClick={Atras}
    >
      <div
        className="aot-modal-document shadow-lg shadow-intensity"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${titan.img?.split("/revision")[0]})`,
        }}
      >
        {/* ENCABEZADO TÁCTICO */}
        <div className="aot-modal-header d-flex align-items-center p-3">
          <button
            className="aot-btn-back btn btn-outline-light border-2 fw-bold"
            onClick={Atras}
          >
            <span className="me-2">←</span> REGRESAR
          </button>
          <div className="aot-header-line flex-grow-1 ms-3"></div>
        </div>

        {/* CUERPO DEL DOCUMENTO */}
        <div className="aot-modal-body text-center py-5 px-4">
          <span className="aot-stamp-red mb-3 d-inline-block">
            AMENAZA CONFIRMADA
          </span>

          <div className="aot-title-wrapper my-4">
            <h1 className="aot-titan-name-light display-3 fw-black">
              {titan.name}
            </h1>
            <div className="aot-underline-blood"></div>
          </div>

          <div className="aot-info-box mt-5 p-3">
            <p className="text-light-50 small text-uppercase fw-bold tracking-widest mb-0">
              Archivo de Inteligencia: Unidad de Reconocimiento N° {titan.id}
            </p>
          </div>
        </div>

        {/* DECORACIÓN INFERIOR */}
        <div className="aot-modal-footer d-flex justify-content-center pb-4">
          <div className="aot-seal-gold"></div>
        </div>
      </div>
    </div>
  );
}

export { Titan };
