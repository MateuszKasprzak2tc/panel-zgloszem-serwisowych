function TicketList({tickets}){
    if(tickets.length === 0){
        return <p>brak zgłoszeń do wyświetlenia.</p>
    }

    return(
        <div>
            {tickets.map(ticket =>(
                <TicketItem key={ticket.id} ticket={ticket}/>
            ))}
        </div>
    )
}