import React, { useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get(`https://nominatim.openstreetmap.org/search?q=${search}&format=json`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => console.log(error));
  }, [search]);

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
