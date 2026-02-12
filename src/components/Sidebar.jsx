import { NavLink } from "react-router-dom";
import { FaHome, FaSeedling, FaChartLine, FaHeartbeat, FaInfoCircle } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Gerbera</h2>

      <NavLink to="/">
        <FaHome /> Home
      </NavLink>

      <NavLink to="/prediction">
        <FaChartLine /> Predictions
      </NavLink>

      <NavLink to="/sensors">
        <FaSeedling /> Sensors
      </NavLink>

      <NavLink to="/sensor-health">
        <FaHeartbeat /> Sensor Health
      </NavLink>

      <NavLink to="/about">
        <FaInfoCircle /> About
      </NavLink>
    </div>
  );
}
