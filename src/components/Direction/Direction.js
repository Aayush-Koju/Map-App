import React, { useContext } from "react";
import "./Direction.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { MyContext } from "../../Context/MyContext";
import ChangeMapView from "../ChangeMapView/ChangeMapView";
import NewMarker from "../NewMarker/NewMarker";
import { Icon } from "leaflet";

function Direction() {
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
    iconUrl: `${process.env.PUBLIC_URL}/icons/marker.png`,
    iconSize: [38, 38], //size of the icon
  });
  return (
    <MapContainer
      tap={true}
      center={[27.701, 85.323]}
      zoom={13}
      // minzoom={12}
      maxZoom={18}
    >
      <TileLayer
        attribution={mapSkins[mapSkin].attribution}
        url={mapSkins[mapSkin].url}
      />
      <div style={{ width: "300px", backgroundColor: "red" }}>name</div>{" "}
      {/*for testing purpose */}
      <ChangeMapView center={[latitude, longitude]} zoom={13} />
      <NewMarker customIcon={customIcon} />
    </MapContainer>
  );
}

export default Direction;
