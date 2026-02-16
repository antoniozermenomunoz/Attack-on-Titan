import React from "react";

function UsePersonajes() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const API_URL = "https://api.attackontitanapi.com/";

  React.useEffect(() => {
    const fetchAllPages = async () => {
      try {
        setLoading(true);

        let allData = [];
        for (let i = 1; i <= 11; i++) {
          const response = await fetch(API_URL + "characters?page=" + i);
          const data = await response.json();
          allData = [...allData, ...(data.results || data)];
        }

        setCharacters(allData);
      } catch (error) {
        console.error("Error al pedir los personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPages();
  }, []);

  return { characters, setPage, page, loading };
}

export { UsePersonajes };
