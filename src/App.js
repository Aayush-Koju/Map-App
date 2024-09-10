import "./App.css";
import Direction from "./components/Direction/Direction";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./components/Settings/Settings";
import { ContextProvider } from "./Context/MyContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <NavBar />
        Map Application
        <Direction />
        {/* <Settings /> */}
      </div>
    </ContextProvider>
  );
}

export default App;
