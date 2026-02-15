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
  return (
    <div className="container mt-4">
      <header className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center shadow-lg aot-header">
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
          <picture className="me-3">
            <img
              src="/public/IMG/Logo.png"
              alt="Logo"
              width="55"
              height="55"
              className="aot-logo"
            />
          </picture>
          <div>
            <h1 className="h4 mb-0 fw-bold aot-title">Attack on Titan</h1>
          </div>
        </div>
        <nav className="navbar navbar-expand p-0">
          <ul className="nav nav-pills">
            {routes.map((route) => (
              <li className="nav-item" key={route.to}>
                <NavLink to={route.to} className="nav-link aot-nav-link">
                  {route.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export { Menu };
