import React, { createContext, useState } from "react";

export const MyContext = createContext();

// export const ContextProvider = ({ children }) => {
//   const [result, setResult] = useState(null);

//   const setResultValue = (value) => {
//     setResult(value);
//   };
//   return (
//     <MyContext.Provider value={{ result, setResultValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// };

// export const useMyContext = () => {
//   return useContext(MyContext);
// };

export const ContextProvider = ({ children }) => {
  const [result, setResult] = useState(null);
  const [mapSkin, setMapSkin] = useState("standard");

  return (
    <MyContext.Provider value={{ result, setResult, mapSkin, setMapSkin }}>
      {children}
    </MyContext.Provider>
  );
};
