import React from "react";

function Summary({ tickets = [] }) {
  const totalTickets = tickets.length;
  const newTickets = tickets.filter((t) => t.status === "nowe").length;
  const inProgressTickets = tickets.filter((t) => t.status === "w trakcie").length;
  const completedTickets = tickets.filter((t) => t.status === "zakończone").length;

  return (
    <div className="summary-container">
      <div className="summary-card total">
        <div className="summary-icon">📊</div>
        <div className="summary-content">
          <span className="summary-label">Wszystkie</span>
          <span className="summary-count">{totalTickets}</span>
        </div>
      </div>

      <div className="summary-card new">
        <div className="summary-icon">✨</div>
        <div className="summary-content">
          <span className="summary-label">Nowe</span>
          <span className="summary-count">{newTickets}</span>
        </div>
      </div>

      <div className="summary-card in-progress">
        <div className="summary-icon">⚙️</div>
        <div className="summary-content">
          <span className="summary-label">W trakcie</span>
          <span className="summary-count">{inProgressTickets}</span>
        </div>
      </div>

      <div className="summary-card completed">
        <div className="summary-icon">✅</div>
        <div className="summary-content">
          <span className="summary-label">Zakończone</span>
          <span className="summary-count">{completedTickets}</span>
        </div>
      </div>
    </div>
  );
}

export default Summary;
