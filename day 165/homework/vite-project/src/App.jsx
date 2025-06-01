import { useState } from "react";
import peopleData from "./people";
import "./App.css";

function App() {
  const [isFavoriteOnly, setIsFavoriteOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredPeople = peopleData
    .filter(person => {
      const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFavorite = isFavoriteOnly ? person.isFavorite : true;
      return matchesSearch && matchesFavorite;
    })
    .sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  return (
    <div className="app">
      <h1>მომხმარებლების სია</h1>
      <div className="controls">
        <input
          type="text"
          placeholder="ძიება სახელით..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={isFavoriteOnly}
            onChange={() => setIsFavoriteOnly(!isFavoriteOnly)}
          />
          მხოლოდ ფავორიტები
        </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">სორტირება ↑</option>
          <option value="desc">სორტირება ↓</option>
        </select>
      </div>
      <div className="cards">
        {filteredPeople.map(person => (
          <div key={person.id} className="card">
            <h3>{person.name}</h3>
            <p>{person.email}</p>
            <p>{person.phone}</p>
            <p>{person.description}</p>
            <p>{person.isFavorite ? "⭐ ფავორიტი" : ""}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
