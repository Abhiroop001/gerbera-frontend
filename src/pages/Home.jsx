import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

import { GiLightBulb, GiWaterRecycling } from "react-icons/gi";
import { FaThermometerHalf, FaSeedling } from "react-icons/fa";

/* ================= MOCK DATA ================= */

const temperatureData = [
  { time: "10AM", value: 22 },
  { time: "11AM", value: 24 },
  { time: "12PM", value: 27 },
  { time: "1PM", value: 26 },
  { time: "2PM", value: 25 },
  { time: "3PM", value: 28 }
];

const humidityData = [
  { time: "10AM", value: 65 },
  { time: "11AM", value: 60 },
  { time: "12PM", value: 58 },
  { time: "1PM", value: 62 },
  { time: "2PM", value: 70 },
  { time: "3PM", value: 68 }
];

const npkData = [
  { name: "Nitrogen", value: 95 },
  { name: "Phosphorus", value: 60 },
  { name: "Potassium", value: 120 }
];

const productivityData = [
  { name: "Optimal", value: 75 },
  { name: "Suboptimal", value: 25 }
];

const COLORS = ["#16a34a", "#dc2626"];

/* ================= COMPONENT ================= */

export default function Home() {
  return (
    <div className="home-layout">

      {/* LEFT SECTION */}
      <div className="left-panel">

        {/* KPI 2x2 */}
        <div className="kpi-grid">

          <div className="dashboard-card">
            <FaThermometerHalf className="dashboard-icon" />
            <h3>Temperature</h3>
            <p>26°C</p>
          </div>

          <div className="dashboard-card">
            <GiLightBulb className="dashboard-icon icon-on" />
            <h3>Light Status</h3>
            <p className="status-green">ON</p>
          </div>

          <div className="dashboard-card">
            <GiWaterRecycling className="dashboard-icon icon-off" />
            <h3>Pump Status</h3>
            <p className="status-red">OFF</p>
          </div>

          <div className="dashboard-card">
            <FaSeedling className="dashboard-icon" />
            <h3>Crop Productivity</h3>
            <p className="status-green">Optimal</p>
          </div>

        </div>

        {/* Charts stacked vertically */}
        <div className="chart-block">
          <h3>Temperature Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={3}/>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-block">
          <h3>Humidity Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={humidityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#2563eb" fill="#93c5fd"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="right-panel">

        <div className="dashboard-card">
          <h3>NPK Levels</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={npkData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h3>Productivity Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={productivityData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                label
              >
                {productivityData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card">
          <h3>Recent Alerts</h3>
          {[
            "Low humidity detected",
            "Light intensity high",
            "NPK imbalance",
            "Soil pH deviation"
          ].map((alert, i) => (
            <div key={i} className="alert-item">
              <span className="alert-dot"></span>
              {alert}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
