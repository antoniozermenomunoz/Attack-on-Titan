import { MessageLoading } from "../../Components/Message/MessageLoading";
import { Paginacion } from "../../Components/Paginacion/Paginacion";
import { Buscador } from "../../Components/Buscador/Buscador";
import { ListaTitanes } from "./ListaTitanes/ListaTitanes";
import { TitanesContext } from "./TitanesContext";
import { Outlet } from "react-router-dom";
import "./Titanes.css";
import React from "react";

function Titanes() {
  const {
    dates,
    FilteredTitans,
    TotalPages,
    setPage,
    SetSearchValue,
    SearchValue,
  } = React.useContext(TitanesContext);
  if (dates.loading) return <MessageLoading />;
  return (
    <div className="container py-4">
      <Outlet />
      <h1 className="aot-main-title text-center mb-5">
        Titanes de Attack on Titan
      </h1>
      <Buscador
        SearchValue={SearchValue}
        SetSearchValue={SetSearchValue}
        placeholder="Escribe el nombre del titán..."
      />
      <ListaTitanes FilteredTitans={FilteredTitans} />
      <Paginacion page={1} setPage={setPage} totalPages={TotalPages} />
    </div>
  );
}

export { Titanes };
