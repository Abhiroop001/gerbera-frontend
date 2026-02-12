import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Prediction from "./pages/Prediction";
import Sensors from "./pages/Sensors";
import SensorHealth from "./pages/SensorHealth";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/sensor-health" element={<SensorHealth />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
