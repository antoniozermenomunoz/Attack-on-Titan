import { NavLink, Outlet } from "react-router-dom";
import { PersonajesContext } from "./PersonajesContext";
import { Buscador } from "../../Components/Buscador/Buscador";
import React from "react";
import "./Personajes.css";
import { Paginacion } from "../../Components/Paginacion/Paginacion";
import { MessageLoading } from "../../Components/Message/MessageLoading";
import { MessageNotFound } from "../../Components/Message/MessageNotFound";

function Personajes() {
  const { data, SearchedPersonajes, totalPages, SetSearchValue, SearchValue } =
    React.useContext(PersonajesContext);

  const { setPage, page, loading } = data;

  if (loading) return <MessageLoading />;

  return (
    <div className="container py-4">
      <h1 className="aot-main-title text-center mb-5">
        Personajes de Attack on Titan
      </h1>
      <Buscador
        SearchValue={SearchValue}
        SetSearchValue={SetSearchValue}
        placeholder={"Escribe el nombre del guerrero ...."}
      />
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {SearchedPersonajes?.length > 0
          ? SearchedPersonajes.map((personaje) => (
              <div className="col" key={personaje.id}>
                <NavLink
                  to={`/Personajes/${personaje.id}`}
                  className="text-decoration-none shadow-none"
                >
                  <div className="card h-100 aot-pj-card">
                    <div className="aot-pj-img-wrapper">
                      <img
                        src={personaje.img?.split("/revision")[0]}
                        alt={personaje.name}
                        className="card-img-top aot-pj-img"
                      />
                      <div className="aot-pj-overlay">
                        <span className="small">VER EXPEDIENTE</span>
                      </div>
                    </div>
                    <div className="card-body aot-pj-body">
                      <h5 className="card-title aot-pj-name mb-0">
                        {personaje.name}
                      </h5>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))
          : SearchedPersonajes?.length === 0 && (
              <MessageNotFound message={"No hay resultados"} />
            )}
      </div>
      {!SearchedPersonajes && (
        <MessageNotFound message={"Por favor ingresa un término de búsqueda"} />
      )}

      <Paginacion page={page} setPage={setPage} totalPages={totalPages} />

      <Outlet />
    </div>
  );
}

export { Personajes };
