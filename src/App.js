import "./App.css";
import Direction from "./components/Direction/Direction";
import NavBar from "./components/NavBar/NavBar";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <NavBar />
      Map Application
      <Direction />
      {/* <Settings /> */}
    </div>
  );
}

export default App;
