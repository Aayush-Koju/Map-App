import React, { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import "./Settings.css";

function Settings() {
  const { setMapSkin } = useContext(MyContext);
  return (
    <div className="settings">
      <p>Skin</p>
      <select onChange={(e) => setMapSkin(e.target.value)}>
        <option value="standard">Standard</option>
        <option value="satellite">Satellite</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default Settings;
