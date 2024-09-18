import { useContext, useEffect } from "react";
import { Rectangle, useMap } from "react-leaflet";
import { MyContext } from "../../Context/MyContext";

function ChangeMapView({ center, zoom }) {
  const map = useMap();
  const { result } = useContext(MyContext);

  useEffect(() => {
    console.log("Bounding box result:", result);

    if (result) {
      map.fitBounds(result, zoom); // setting map view
    } else if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map, result]);
  return null;
}

export default ChangeMapView;
