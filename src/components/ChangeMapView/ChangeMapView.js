import { useContext, useEffect } from "react";
import { useMap } from "react-leaflet";
import { MyContext } from "../../Context/MyContext";

function ChangeMapView({ center, zoom }) {
  const map = useMap();
  const { result } = useContext(MyContext);

  useEffect(() => {
    console.log("Bounding box result:", result);
    if (result) {
      map.fitBounds(result); //bounding box
    } else if (center) {
      map.setView(center, zoom);
    }
  }, [center, zoom, map, result]);
  return null;
}

export default ChangeMapView;
