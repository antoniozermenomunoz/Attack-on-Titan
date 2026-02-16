function Buscador({ SearchValue, SetSearchValue, placeholder }) {
  return (
    <div className="container d-flex justify-content-center my-3">
      <div className="input-group aot-search-group shadow-sm">
        <span className="input-group-text aot-search-icon">
          <i className="bi bi-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </i>
        </span>
        <input
          type="text"
          className="form-control a-input-search"
          placeholder={placeholder}
          aria-label="Buscar"
          value={SearchValue}
          onChange={(event) => {
            SetSearchValue(event.target.value);
          }}
        />
        {SearchValue && (
          <button
            className="btn aot-btn-clear"
            onClick={() => SetSearchValue("")}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export { Buscador };
