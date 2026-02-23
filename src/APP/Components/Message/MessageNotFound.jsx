import "./MessageNotFound.css";

function MessageNotFound({ message }) {
  return (
    <div className="d-flex justify-content-center align-items-center aot-empty-container">
      <div className="col-12 col-md-8 col-lg-6 text-center py-5">
        <div className="alert aot-alert-empty shadow-lg px-5">
          <span className="fs-1 d-block mb-3 aot-icon-shake"></span>
          <h3 className="aot-title fw-bold mb-3">{message}</h3>
          <div className="aot-divider-center mb-3"></div>
        </div>
      </div>
    </div>
  );
}

export { MessageNotFound };
