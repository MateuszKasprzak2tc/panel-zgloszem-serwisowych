import React from "react";

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
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">➕ Dodaj nowe zgłoszenie</h2>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <input
              type="text"
              name="klient"
              placeholder="👤 Nazwa klienta"
              value={formData.klient}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="urzadzenie"
              placeholder="📱 Urządzenie"
              value={formData.urzadzenie}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="usterka"
              placeholder="🔧 Opis usterki"
              value={formData.usterka}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-select"
              >
                <option value="nowe">🆕 Nowe</option>
                <option value="w trakcie">⚙️ W trakcie</option>
                <option value="zakończone">✅ Zakończone</option>
              </select>
            </div>

            <div className="form-group">
              <select
                name="priorytet"
                value={formData.priorytet}
                onChange={handleChange}
                className="form-select"
              >
                <option value="niski">📊 Niski</option>
                <option value="średni">⚡ Średni</option>
                <option value="wysoki">🔥 Wysoki</option>
              </select>
            </div>
          </div>

          <button type="submit" className="form-button">
            ✨ Dodaj zgłoszenie
          </button>
        </form>

        {error && <p className="form-error">{error}</p>}
      </div>
    </div>
  );
}

export default Form;
