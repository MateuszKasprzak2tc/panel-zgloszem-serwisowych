function FilterStatus({ currentFilter, onFilterChange }) {
  const statusOptions = [
    { value: "wszystkie", label: "Wszystkie" },
    { value: "nowe", label: "Nowe" },
    { value: "w trakcie", label: "W trakcie" },
    { value: "zakończone", label: "Zakończone" }
  ];

  return (
    <div className="filter-status">
      <h2>Filtruj zgłoszenia</h2>
      <div className="filter-buttons">
        {statusOptions.map((option) => (
          <button
            key={option.value}
            className={`filter-btn ${currentFilter === option.value ? "active" : ""}`}
            onClick={() => onFilterChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterStatus;