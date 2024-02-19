import Orderstab from "./components/Orderstab";
import Navigationbar from "./components/Navigationbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navigationbar />

      <div className="Main-container">
        <Orderstab />
      </div>
    </div>
  );
}

export default App;
