import { HashRouter, Routes, Route } from "react-router-dom";
import { MessagePageNotFound } from "../Components/MessagePageNotFound";
import { Menu } from "../Components/Menu/Menu";
import { Personajes } from "../Modules/Personajes/Personajes";

function Rutas() {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" />
        <Route path="/Personajes" element={<Personajes />} />
        <Route path="*" element={<MessagePageNotFound />} />
      </Routes>
    </HashRouter>
  );
}
export { Rutas };
