import "./App.css";
import Direction from "./components/Direction/Direction";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { ContextProvider } from "./Context/MyContext";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <NavBar />
        Map Application
        {/* <Home /> */}
        <Direction />
      </div>
    </ContextProvider>
  );
}

export default App;
