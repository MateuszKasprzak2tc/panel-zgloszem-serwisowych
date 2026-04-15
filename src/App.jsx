import { useEffect, useState } from "react";
import axios from "axios";
import FilterStatus from "./components/FilterStatus";
import TicketList from "./components/TicketList";
import "./App.css";
import Form from "./components/Form";

const item = [
  {
    id: 1,
    klient: "Jan Kowalski",
    urzadzenie: "Laptop Lenovo",
    usterka: "Brak obrazu po uruchomieniu",
    status: "nowe",
    priorytet: "wysoki",
  },
  {
    id: 2,
    klient: "Anna Nowak",
    urzadzenie: "Telefon Samsung",
    usterka: "Pęknięty ekran",
    status: "w trakcie",
    priorytet: "średni",
  },
  {
    id: 3,
    klient: "Piotr Zieliński",
    urzadzenie: "Tablet Huawei",
    usterka: "Nie ładuje baterii",
    status: "zakończone",
    priorytet: "niski",
  },
];

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
      <Form addTicket={(newTicket) => setZgloszenia([...zgloszenia, newTicket])} />
      <TicketList tickets={filteredTickets} />
    </>
  );
}

export default App;
