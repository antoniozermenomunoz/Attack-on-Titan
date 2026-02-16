import { MessagePageNotFound } from "../Components/Message/MessagePageNotFound";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Menu } from "../Components/Menu/Menu";
import { Personajes } from "../Modules/Personajes/Personajes";
import { PersonajesProvider } from "../Modules/Personajes/PersonajesContext";
import { TitanesProvider } from "../Modules/Titanes/TitanesContext";
import { Personaje } from "../Modules/Personajes/Personaje/Personaje";
import { Titanes } from "../Modules/Titanes/Titanes";
import { Titan } from "../Modules/Titanes/ListaTitanes/Titan/Titan";
import { Inicio } from "../Modules/Inicio/Inicio";

function Rutas() {
  return (
    <HashRouter>
      <TitanesProvider>
        <PersonajesProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Personajes" element={<Personajes />}>
              <Route path=":id" element={<Personaje />} />
            </Route>
            <Route path="/Titanes" element={<Titanes />}>
              <Route path=":id" element={<Titan />} />
            </Route>
            <Route path="*" element={<MessagePageNotFound />} />
          </Routes>
        </PersonajesProvider>
      </TitanesProvider>
    </HashRouter>
  );
}

export { Rutas };
