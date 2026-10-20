import { useState } from "react";

function PredictionForm({ onPredict }) {
  const [form, setForm] = useState({
    store: "",
    item: "",
    year: "",
    month: "",
    day: "",
    dayofweek: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.store ||
      !form.item ||
      !form.year ||
      !form.month ||
      !form.day ||
      !form.dayofweek
    ) {
      alert("Please fill in all fields.");
      return;
    }

    onPredict({
      store: Number(form.store),
      item: Number(form.item),
      year: Number(form.year),
      month: Number(form.month),
      day: Number(form.day),
      dayofweek: Number(form.dayofweek),
    });
  };

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "25px",
        borderRadius: "18px",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        AI Demand Prediction
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <label>Store ID</label>

        <input
          type="number"
          name="store"
          placeholder="Enter Store ID"
          value={form.store}
          onChange={handleChange}
          min="1"
        />

        <label>Item ID</label>

        <input
          type="number"
          name="item"
          placeholder="Enter Item ID"
          value={form.item}
          onChange={handleChange}
          min="1"
        />

        <label>Year</label>

        <input
          type="number"
          name="year"
          placeholder="e.g. 2026"
          value={form.year}
          onChange={handleChange}
        />

        <label>Month</label>

        <input
          type="number"
          name="month"
          placeholder="1 - 12"
          value={form.month}
          onChange={handleChange}
          min="1"
          max="12"
        />

        <label>Day</label>

        <input
          type="number"
          name="day"
          placeholder="1 - 31"
          value={form.day}
          onChange={handleChange}
          min="1"
          max="31"
        />

        <label>Day of Week</label>

        <input
          type="number"
          name="dayofweek"
          placeholder="0 = Monday, 6 = Sunday"
          value={form.dayofweek}
          onChange={handleChange}
          min="0"
          max="6"
        />

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "14px",
            borderRadius: "10px",
            background: "#2563eb",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Predict Demand
        </button>
      </form>
    </div>
  );
}

export default PredictionForm;