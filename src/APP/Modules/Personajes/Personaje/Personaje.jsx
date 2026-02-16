import { useParams, useNavigate } from "react-router-dom";
import "./Personaje.css";
import React from "react";

function Personaje() {
  const navigate = useNavigate(); // Herramienta para navegar
  const [character, setCharacter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const URL_character = `https://api.attackontitanapi.com/characters/${useParams()}`;

  React.useEffect(() => {
    setLoading(true);
    const fetchCharacter = async () => {
      try {
        const response = await fetch(URL_character);
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando personaje:", error);
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [URL_character]);

  const handleClose = () => navigate("/Personajes");

  if (loading)
    return (
      <div className="character-detail">
        <h1>Buscando información...</h1>
      </div>
    );

  return (
    <div className="aot-modal-overlay" onClick={handleClose}>
      <div
        className="card aot-character-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row g-0">
          <div className="col-md-5 aot-img-container">
            <img
              src={character.img?.split("/revision")[0]}
              alt={character.name}
              className="img-fluid aot-character-img"
            />
          </div>
          <div className="col-md-7 background">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-start">
                <h1 className="aot-character-name mb-0">{character.name}</h1>
                <button
                  className="btn-close aot-btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="aot-divider my-3"></div>
              <div className="aot-info-grid">
                <p className="mb-2">
                  <span className="badge aot-badge">Género</span>
                  <span className="ms-2 text-dark fw-bold">
                    {character.gender}
                  </span>
                </p>
                <p className="mb-2">
                  <span className="badge aot-badge">Especie</span>
                  <span className="ms-2 text-dark fw-bold">
                    {character.species}
                  </span>
                </p>
                <p className="mb-3">
                  <span className="badge aot-badge">Ocupación</span>
                  <span className="ms-2 text-dark fw-bold">
                    {character.occupation}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Personaje };
