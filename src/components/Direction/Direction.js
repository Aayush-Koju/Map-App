import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./Direction.css";
import { Icon } from "leaflet";

function Direction() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popup: "Hello, I am popup 1",
    },
    {
      geocode: [48.85, 2.3522],
      popup: "Hello, I am popup 2",
    },
    {
      geocode: [48.855, 2.34],
      popup: "Hello, I am popup 3",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconUrl: require(`${process.env.PUBLIC_URL}/icons/marker.png`),
    // iconSize: [38, 38], //size of the icon
  });

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}></Marker>
      ))}
    </MapContainer>
  );
}

export default Direction;
