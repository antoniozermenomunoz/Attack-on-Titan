import React from "react";

function UseTitanes() {
  const API_URL = "https://api.attackontitanapi.com/titans";
  const [titans, setTitans] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        const results = data.results ?? data;
        if (isMounted) {
          setTitans(results);
        }
      } catch (error) {
        console.error("Error al pedir los personajes:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { titans, setTitans, loading, setLoading };
}

export { UseTitanes };
