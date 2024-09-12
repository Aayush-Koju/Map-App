import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { MyContext } from "../../Context/MyContext";

function Search() {
  const [search, setSearch] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const { setResult } = useContext(MyContext);

  useEffect(() => {
    if (search.trim() === "") return; //no request when search is null

    axios
      .get(`https://nominatim.openstreetmap.org/search?q=${search}&format=json`)
      .then((response) => {
        if (response.data.length > 0) {
          // let overallAutocompleteDatas = [];
          let responseData = response.data;
          console.log(responseData); //checking the data got from api

          let suggestions = responseData.map((item) => {
            const { display_name, lat, lon, boundingbox } = item;
            return { display_name, lat, lon, boundingbox };
          });
          setAutoComplete(suggestions);
          setResult([
            [
              parseFloat(suggestions.boundingbox[0]),
              parseFloat(suggestions.boundingbox[2]),
            ], //south west
            [
              parseFloat(suggestions.boundingbox[1]),
              parseFloat(suggestions.boundingbox[3]),
            ], //north east
          ]);
        }
      })
      .catch((error) => console.log(error));
  }, [search]);

  useEffect(() => console.log(autoComplete.length), [autoComplete]);

  const handleAutoCompleteClick = (item) => {
    // setSearch(item.display_name);
    setResult([
      [parseFloat(item.lat) - 0.01, parseFloat(item.lon) - 0.01],
      [parseFloat(item.lat) + 0.01, parseFloat(item.lon) + 0.01],
    ]);
    setAutoComplete([]);
  };

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
      <div
        className="dropdown"
        style={{ display: "flex", textDecorationColor: "GrayText" }}
      >
        {Array.isArray(autoComplete) &&
          autoComplete.map((item, index) => (
            <div key={index} className="dropdown-row">
              <span>
                {item.display_name}
                {item.lat}
                {item.lon}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
