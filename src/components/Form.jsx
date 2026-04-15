function Form({ addTicket }) {
  const [formData, setFormData] = React.useState({
    klient: "",
    urzadzenie: "",
    usterka: "",
    status: "nowe",
    piorytet: "niski",
  });

  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.klient.trim() === "" ||
      formData.urzadzenie.trim() === "" ||
      usterka.trim() === ""
    ) {
      setError("wypełnij wszystkie pola wymagane.");
      return;
    }

    addTicket(formData);

    setFormData({
      klient: "",
      urzadzenie: "",
      usterka: "",
      status: "nowe",
      piorytet: "niski",
    });

    setError("");
  };

  return (
    <div>
      <h2>Dodaj nowe zgłoszenie</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="klient"
          placeholder="Nazwa klienta"
          value={formData.klient}
          onChange={handleChange}
        />

        <input
          type="text"
          name="urzadzenie"
          placeholder="Urządzenie"
          value={formData.urzadzenie}
          onChange={handleChange}
        />

        <input
          type="text"
          name="usterka"
          placeholder="Opis usterki"
          value={formData.usterka}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="nowe">Nowe</option>
          <option value="w trakcie">W trakcie</option>
          <option value="zakończone">Zakończone</option>
        </select>

        <select name="piorytet" value={formData.piorytet} onChange={handleChange}>
          <option value="niski">Niski</option>
          <option value="średni">Średni</option>
          <option value="wysoki">Wysoki</option>
        </select>

        <button type="submit">Dodaj zgłoszenie</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Form;
