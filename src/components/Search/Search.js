import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { MyContext } from "../../Context/MyContext";

function Search() {
  const [search, setSearch] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const { result, setResult, setLatitude, setLongitude } =
    useContext(MyContext);

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
        }
      })
      .catch((error) => console.log(error));
  }, [search]);

  useEffect(() => console.log(autoComplete.length), [autoComplete]);

  const handleSuggestionClick = (index) => {
    const selectedSuggestion = autoComplete[index];

    if (selectedSuggestion && selectedSuggestion.boundingbox) {
      setSearch(selectedSuggestion.display_name);
      setResult([
        [
          parseFloat(selectedSuggestion.boundingbox[0]),
          parseFloat(selectedSuggestion.boundingbox[2]),
        ], //south west
        [
          parseFloat(selectedSuggestion.boundingbox[1]),
          parseFloat(selectedSuggestion.boundingbox[3]),
        ], //north east
      ]);
      setLatitude(selectedSuggestion.lat);
      setLongitude(selectedSuggestion.lon);
    }
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
        // style={{ display: "flex", textDecorationColor: "GrayText" }}
      >
        {Array.isArray(autoComplete) &&
          autoComplete.map((item, index) => (
            <div
              key={index}
              className="dropdown-row"
              onClick={() => handleSuggestionClick(index)}
            >
              {item.display_name}
              {/* {item.lat}
                {item.lon} */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
