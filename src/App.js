// import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import "./App.scss";
import BakingExperiments from "./pages/baking-experiments/baking-experiments.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlouristBrownies from './pages/baking-experiments/recipes/flourist-brownies.tsx';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="baking-experiments" element={<BakingExperiments />}/>
        </Routes>

    </div>
  );
}

export default App;
