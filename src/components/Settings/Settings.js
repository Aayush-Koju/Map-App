import React from "react";

function Settings({ setMapSkin }) {
  return (
    <div>
      Settings
      <div>
        <p>Choose Skin for this Map</p>
        <select onChange={(e) => setMapSkin(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="satellite">Satellite</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;
