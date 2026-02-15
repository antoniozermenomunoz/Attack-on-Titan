import React from "react";

function UsePersonajes() {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const API_URL = "https://api.attackontitanapi.com/characters?page=1";

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setCharacters(data.results || data);
        setLoading(false);
      } catch (error) {
        console.error("Error al pedir titanes:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { characters, loading };
}

export { UsePersonajes };
