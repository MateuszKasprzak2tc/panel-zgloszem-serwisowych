import React from "react";

function TicketItem({ ticket }) {
  return (
    <div className="ticket-item">
      <h3>{ticket.klient}</h3>
      <p>
        <strong>Urządzenie:</strong> {ticket.urzadzenie}
      </p>
      <p>
        <strong>Usterka:</strong> {ticket.usterka}
      </p>
      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
      <p>
        <strong>Priorytet:</strong> {ticket.priorytet}
      </p>
    </div>
  );
}

export default TicketItem;
