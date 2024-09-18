import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import { MyContext } from "../../Context/MyContext";
import "./NewMarker.css";

function NewMarker({ customIcon }) {
  const [clickedLocation, setClickedLocation] = useState([]);
  const [reverseLocation, setReverseLocation] = useState(null);
  const { latitude, longitude } = useContext(MyContext);

  const center = latitude && longitude ? [latitude, longitude] : null;

  useEffect(() => {
    if (reverseLocation) {
      console.log(
        reverseLocation.suburb,
        reverseLocation.city_district,
        reverseLocation.city,
        reverseLocation.municipality,
        reverseLocation.country
      );
    }
  }, [reverseLocation]);

  useEffect(() => {
    if (clickedLocation.length > 0) {
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${Number(
            clickedLocation[0]
          )}&lon=${Number(clickedLocation[1])}&zoom=18&addressdetails=1`
        )
        .then((response) => {
          const { address } = response.data;

          const { suburb, city_district, city, municipality, country } =
            address;
          setReverseLocation({
            suburb,
            city_district,
            city,
            municipality,
            country,
          });
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
      // console.log(clickedLocation);
    }
  }, [clickedLocation]);

  const map = useMapEvents({
    click(e) {
      setClickedLocation([e.latlng.lat, e.latlng.lng]);
      console.log([e.latlng.lat, e.latlng.lng]);
    },
  });

  const clearMarker = () => {
    setClickedLocation([]);
    setReverseLocation([]);
  };

  return (
    <div>
      <Marker //new one for searched map or default
        key={center[0]} //loads even if marker is not added manually
        position={center}
        interactive={false}
        icon={customIcon}
      />
      {clickedLocation.length > 0 ? (
        <Marker
          key={clickedLocation[0]}
          position={clickedLocation}
          interactive={false}
          icon={customIcon}
        />
      ) : null}

      {clickedLocation.length > 0 && (
        <button onClick={clearMarker} className="clear-marker">
          Remove Marker
        </button>
      )}
    </div>
  );
}

export default NewMarker;
