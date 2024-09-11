import axios from "axios";
import React, { useEffect, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

function NewMarker({ customIcon }) {
  const [clickedLocation, setClickedLocation] = useState([]);
  const [reverseLocation, setReverseLocation] = useState(null);

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

  return clickedLocation.length > 0 ? (
    <Marker
      key={clickedLocation[0]}
      position={clickedLocation}
      interactive={false}
      icon={customIcon}
    />
  ) : null;
}

export default NewMarker;
