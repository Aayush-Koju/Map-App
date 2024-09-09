import React, { useState } from "react";
import "./Search.css";

function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src="icons/search.png" alt="search icon" />
      </div>
    </div>
  );
}

export default Search;
