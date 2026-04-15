import { useEffect, useState } from "react";
import axios from "axios";
import FilterStatus from "./components/FilterStatus";
import TicketList from "./components/TicketList";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [zgloszenia, setZgloszenia] = useState([]);
  const [filter, setFilter] = useState("wszystkie");

  useEffect(() => {
    axios.get("/zgloszenia.json").then((res) => {
      setZgloszenia(res.data.zgloszenia);
    });
  }, []);

  const getFilteredTickets = (tickets, selectedFilter) => {
    if (selectedFilter === "wszystkie") {
      return tickets;
    }
    return tickets.filter((ticket) => ticket.status === selectedFilter);
  };

  const filteredTickets = getFilteredTickets(zgloszenia, filter);

  return (
    <>
      <FilterStatus currentFilter={filter} onFilterChange={setFilter} />
      <Form addTicket={(newTicket) => setZgloszenia((prev) => [...prev, newTicket])} />
      <TicketList tickets={filteredTickets} />
    </>
  );
}

export default App;
