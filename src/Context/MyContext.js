import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [result, setResult] = useState(null); //for showing searched result in map
  const [mapSkin, setMapSkin] = useState("standard");
  const [latitude, setLatitude] = useState(27.701);
  const [longitude, setLongitude] = useState(85.323);

  return (
    <MyContext.Provider
      value={{
        result,
        setResult,
        mapSkin,
        setMapSkin,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
