import { NavLink } from "react-router-dom";
import "./Listatitanes.css";
import { MessageNotFound } from "../../../Components/Message/MessageNotFound";

function ListaTitanes({ FilteredTitans }) {
  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {FilteredTitans?.length > 0 ? (
          FilteredTitans.map((Titan) => (
            <div className="col-12 col-sm-6 col-lg-4" key={Titan.id}>
              <NavLink
                to={`/Titanes/${Titan.id}`}
                className="text-decoration-none"
              >
                <div className="card h-100 titan-card shadow">
                  <div className="titan-img-container">
                    <img
                      src={Titan.img?.split("/revision")[0]}
                      alt={Titan.name}
                      className="card-img-top titan-img"
                    />
                  </div>
                  <div className="card-body titan-card-body">
                    <h5 className="titan-name">{Titan.name}</h5>
                    <div className="titan-deco-line"></div>
                  </div>
                </div>
              </NavLink>
            </div>
          ))
        ) : (
          <MessageNotFound message={"No hay resultados"} />
        )}
      </div>
    </div>
  );
}

export { ListaTitanes };
