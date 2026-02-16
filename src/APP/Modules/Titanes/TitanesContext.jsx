import { UseTitanes } from "./UseTitanes";
import React from "react";

const TitanesContext = React.createContext();

function TitanesProvider({ children }) {
  const [SearchValue, SetSearchValue] = React.useState("");

  const titansPage = 10;

  const dates = UseTitanes();
  const { titans = [] } = dates;

  const FilteredTitans = React.useMemo(() => {
    return titans.filter((titan) =>
      (titan.name || "").toLowerCase().includes(SearchValue.toLowerCase()),
    );
  }, [titans, SearchValue]);

  const TotalPages =
    FilteredTitans.length > 0
      ? Math.ceil(FilteredTitans.length / titansPage)
      : 1;

  return (
    <TitanesContext.Provider
      value={{ dates, SearchValue, SetSearchValue, FilteredTitans, TotalPages }}
    >
      {children}
    </TitanesContext.Provider>
  );
}

export { TitanesProvider, TitanesContext };
