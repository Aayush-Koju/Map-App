import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import "./Geocoding.css";

function Geocoding() {
  const { latitude, setLatitude, longitude, setLongitude } =
    useContext(MyContext);
  return (
    <div className="geocoding">
      <div>
        <p>Lat</p>
        <input
          type="number"
          placeholder="enter latitude"
          value={latitude}
          onChange={(e) => setLatitude(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Lon</p>
        <input
          type="number"
          placeholder="enter longitude"
          value={longitude}
          onChange={(e) => setLongitude(Number(e.target.value))}
        />
      </div>
    </div>
  );
}

export default Geocoding;
