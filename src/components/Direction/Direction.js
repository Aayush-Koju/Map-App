import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Direction.css";
import { divIcon, Icon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

function Direction() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am popup 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am popup 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am popup 3",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconUrl: `${process.env.PUBLIC_URL}/icons/marker.png`,
    iconSize: [38, 38], //size of the icon
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}

      {/* <TileLayer
        attribution='<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> 
        | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
      /> */}

      <TileLayer
        attribution="&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver"
        url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Direction;
