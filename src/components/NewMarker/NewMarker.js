import { Icon } from "leaflet";
import React, { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";

function NewMarker({ customIcon }) {
  const [clickedLocation, setClickedLocation] = useState([]);
  const map = useMapEvents({
    click(e) {
      setClickedLocation([e.latlng.lat, e.latlng.lng]);
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
