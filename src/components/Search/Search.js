import React, { useContext, useEffect, useState } from "react";
import "./Search.css";
import axios from "axios";
import { MyContext } from "../../Context/MyContext";

function Search() {
  const [search, setSearch] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const { result, setResult } = useContext(MyContext);

  useEffect(() => {
    if (search.trim() === "") return; //no request when search is null

    axios
      .get(`https://nominatim.openstreetmap.org/search?q=${search}&format=json`)
      .then((response) => {
        if (response.data.length > 0) {
          let overallAutocompleteDatas = [];
          let result = response.data;
          for (let i = 0; i < result.length; i++) {
            const { display_name, lat, lon } = result[i];
            setAutocomplete({
              display_name,
              lat,
              lon,
            });
          }

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
  }, [search, setResult]);

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
      {result?.length > 0 && (
        <div
          style={{
            height: 1000,
            widows: 300,
            background: "red",
            position: "absolute",
          }}
        >
          This is the content
        </div>
      )}
      {/* <div></div> */}
    </div>
  );
}

export default Search;
