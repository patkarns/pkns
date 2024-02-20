import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import "./App.scss";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

    </div>
  );
}

export default App;
