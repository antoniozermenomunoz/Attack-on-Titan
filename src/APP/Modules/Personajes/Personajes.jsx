import { UsePersonajes } from "./UsePersonajes";

function Personajes() {
  const { characters, loading } = UsePersonajes();

  if (loading) return <h1>Cargando Titanes...</h1>;

  return (
    <div>
      <h1>Personajes de Attack on Titan</h1>
      {characters.map((pj) => (
        <div key={pj.id}>
          <h5>{pj.name}</h5>
        </div>
      ))}
    </div>
  );
}

export { Personajes };
