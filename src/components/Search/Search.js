import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { MyContext } from "../../Context/MyContext";

function Search() {
  const [search, setSearch] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);
  const { result, setResult } = useContext(MyContext);

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
            const { display_name, lat, lon } = item;
            return { display_name, lat, lon };
          });
          setAutoComplete(suggestions);

          // const bounds = response.data[0].boundingbox;
          // console.log("bounds", bounds);
          // console.log(result);
          // setResult([
          //   [parseFloat(bounds[0]), parseFloat(bounds[2])], //south west
          //   [parseFloat(bounds[1]), parseFloat(bounds[3])], //north east
          // ]);
          // console.log("result", result);
        }
      })
      .catch((error) => console.log(error));
  }, [search, autoComplete]);

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
      <div className="dropdown">
        {Array.isArray(autoComplete) &&
          autoComplete.map((item, index) => (
            <div key={index} className="dropdown-row">
              {item.display_name}
              {item.lat}
              {item.lon}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
