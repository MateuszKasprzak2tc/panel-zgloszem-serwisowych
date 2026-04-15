import React from "react";

function TicketItem({ ticket }) {
  const getPriorityColor = (priorytet) => {
    switch (priorytet) {
      case "wysoki":
        return "#ff6b6b";
      case "średni":
        return "#ffa500";
      case "niski":
        return "#51cf66";
      default:
        return "#667eea";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "nowe":
        return "#4ecdc4";
      case "w trakcie":
        return "#ffe66d";
      case "zakończone":
        return "#95e1d3";
      default:
        return "#667eea";
    }
  };

  return (
    <div className="ticket-item">
      <div className="ticket-header">
        <h3 className="ticket-client">{ticket.klient}</h3>
        <span
          className="ticket-priority"
          style={{ backgroundColor: getPriorityColor(ticket.priorytet) }}
        >
          {ticket.priorytet}
        </span>
      </div>

      <div className="ticket-content">
        <div className="ticket-field">
          <strong>📱 Urządzenie:</strong>
          <p>{ticket.urzadzenie}</p>
        </div>

        <div className="ticket-field">
          <strong>🔧 Usterka:</strong>
          <p>{ticket.usterka}</p>
        </div>

        <div className="ticket-footer">
          <span
            className="ticket-status"
            style={{ backgroundColor: getStatusColor(ticket.status) }}
          >
            ● {ticket.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TicketItem;
