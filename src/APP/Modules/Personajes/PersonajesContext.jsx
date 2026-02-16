import { UsePersonajes } from "./UsePersonajes";
import React from "react";

const PersonajesContext = React.createContext();

function PersonajesProvider({ children }) {
  const data = UsePersonajes();
  const { characters = [], page, setPage } = data;

  const [SearchValue, SetSearchValue] = React.useState("");

  const charactersPerPage = 15;

  const filteredCharacters = React.useMemo(() => {
    return characters.filter((character) =>
      (character.name || "").toLowerCase().includes(SearchValue.toLowerCase()),
    );
  }, [characters, SearchValue]);

  const totalPages =
    filteredCharacters.length > 0
      ? Math.ceil(filteredCharacters.length / charactersPerPage)
      : 1;

  const SearchedPersonajes = filteredCharacters.slice(
    (page - 1) * charactersPerPage,
    page * charactersPerPage,
  );

  React.useEffect(() => {
    setPage(1);
  }, [SearchValue, setPage]);

  return (
    <PersonajesContext.Provider
      value={{
        data,
        SearchedPersonajes,
        SearchValue,
        SetSearchValue,
        totalPages,
      }}
    >
      {children}
    </PersonajesContext.Provider>
  );
}

export { PersonajesContext, PersonajesProvider };
