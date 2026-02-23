import logo from "../../../../public/IMG/Logo.png";
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const routes = [];
  routes.push({
    to: "/",
    text: "inicio",
  });
  routes.push({
    to: "/Personajes",
    text: "Personajes",
  });
  routes.push({
    to: "/Titanes",
    text: "Titanes",
  });
  return (
    <div className="container-fluid px-0">
      {" "}
      {/* Fluido para ocupar todo el ancho si deseas */}
      <header className="aot-header-main shadow-lg">
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          {/* SECCIÓN DE LA INSIGNIA */}
          <div className="aot-brand-wrapper">
            <div className="aot-logo-frame">
              <img src={logo} alt="Logo" className="aot-logo-img" />
            </div>
            <div className="ms-3">
              <h1 className="aot-main-title">Attack on Titan</h1>
              <div className="aot-tagline"></div>
            </div>
          </div>

          {/* NAVEGACIÓN TÁCTICA */}
          <nav className="aot-nav-container">
            <ul className="nav nav-pills">
              {routes.map((route) => (
                <li className="nav-item" key={route.to}>
                  <NavLink to={route.to} className="nav-link aot-nav-link">
                    <span className="link-text">{route.text}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export { Menu };
