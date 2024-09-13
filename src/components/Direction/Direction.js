import React, { useContext, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./Direction.css";
import { divIcon, Icon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import NewMarker from "../NewMarker/NewMarker";
import { MyContext } from "../../Context/MyContext";
import ChangeMapView from "../ChangeMapView/ChangeMapView";

function Direction() {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //     },
  //     (error) => {
  //       console.error("Error getting geolocation:", error);
  //     }
  //   );
  // });

  const { mapSkin, latitude, longitude } = useContext(MyContext);

  const mapSkins = {
    standard: {
      url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "&copy; OpenStreetMap",
    },
    satellite: {
      url: "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png",
      attribution:
        "&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver",
    },
    dark: {
      url: "https://tiles.stadiamaps.com/tiles/stamen_toner_background/{z}/{x}/{y}{r}.png",
      attribution: "&copy; Stadia Maps",
    },
  };

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconUrl: `${process.env.PUBLIC_URL}/icons/marker.png`,
    iconSize: [38, 38], //size of the icon
  });

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

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };

  return (
    <>
      <MapContainer
        tap={true}
        center={[27.701, 85.323]}
        zoom={13}
        // minzoom={12}
        maxZoom={18}
        // bounds={result}
      >
        <TileLayer
          attribution={mapSkins[mapSkin].attribution}
          url={mapSkins[mapSkin].url}
        />
        <ChangeMapView center={[latitude, longitude]} zoom={13} />
        <NewMarker customIcon={customIcon} />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {
            //predefined markers
            markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))
          }
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}

export default Direction;
