import "./Paginacion.css";

function Paginacion({ page, setPage, totalPages }) {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
      {page > 1 && (
        <button
          className="btn aot-btn-outline"
          onClick={() => setPage((prev) => prev - 1)}
        >
          « Anterior
        </button>
      )}

      <div className="aot-page-indicator">
        PÁGINA <span className="fw-bold text-white">{page}</span> DE{" "}
        {totalPages}
      </div>

      {page < totalPages && (
        <button
          className="btn aot-btn-outline"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Siguiente »
        </button>
      )}
    </div>
  );
}

export { Paginacion };
