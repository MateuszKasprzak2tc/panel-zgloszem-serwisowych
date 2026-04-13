function TicketCard({ticket}){
    <div className="card">
        <h3>{ticket.klient}</h3>
        <p>Urządzenie: {klient.urzadzenie}</p>
        <p>usterka: {klient.usterka}</p>
        <p>status: {klient.status}</p>
        <p>priorytet: {klient.priorytet}</p>
    </div>
}