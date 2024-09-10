import "./App.css";
import Direction from "./components/Direction/Direction";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import Settings from "./components/Settings/Settings";
import { ContextProvider } from "./Context/MyContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <NavBar />
        Map Application
        <Direction />
      </div>
    </ContextProvider>
  );
}

export default App;
