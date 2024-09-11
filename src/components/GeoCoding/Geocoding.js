import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

function Geocoding() {
  const { latitude, setLatitude, longitude, setLongitude } =
    useContext(MyContext);
  return (
    <div className="geocoding">
      <input
        type="number"
        placeholder="enter latitude"
        value={latitude}
        onChange={(e) => setLatitude(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="enter longitude"
        value={longitude}
        onChange={(e) => setLongitude(Number(e.target.value))}
      />
    </div>
  );
}

export default Geocoding;
