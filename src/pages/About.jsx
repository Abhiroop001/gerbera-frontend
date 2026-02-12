import {
  FaSeedling,
  FaSun,
  FaChartLine,
  FaLeaf
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

/* ================= MOCK DATA ================= */

const productionGrowth = [
  { year: "2020", yield: 18 },
  { year: "2021", yield: 22 },
  { year: "2022", yield: 27 },
  { year: "2023", yield: 32 },
  { year: "2024", yield: 38 }
];

const yieldComparison = [
  { name: "Open Field", value: 20 },
  { name: "Polyhouse", value: 38 }
];

const profitabilityData = [
  { name: "Improved Profit", value: 70 },
  { name: "Cost", value: 30 }
];

const COLORS = ["#16a34a", "#dc2626"];

/* ================= COMPONENT ================= */

export default function About() {
  return (
    <div className="about-page">

      <h1>🌼 About Gerbera Polyhouse System</h1>

      <p className="about-intro">
        Gerbera is one of the most popular commercial flower crops grown worldwide.
        It is widely cultivated in polyhouse environments due to its high market demand,
        vibrant colors, and long vase life.
      </p>

      {/* BENEFITS GRID */}
      <div className="about-grid">

        <div className="about-card">
          <FaSeedling className="about-icon" />
          <h3>High Market Value</h3>
          <p>
            Gerbera flowers are in high demand for bouquets, decorations,
            and export markets, providing excellent income opportunities for farmers.
          </p>
        </div>

        <div className="about-card">
          <FaSun className="about-icon" />
          <h3>Polyhouse Advantage</h3>
          <p>
            Controlled environments maintain optimal temperature,
            humidity, and light conditions, improving yield and flower quality.
          </p>
        </div>

        <div className="about-card">
          <FaChartLine className="about-icon" />
          <h3>Higher Productivity</h3>
          <p>
            Smart monitoring systems optimize irrigation,
            lighting, and nutrient management.
          </p>
        </div>

        <div className="about-card">
          <FaLeaf className="about-icon" />
          <h3>Environmental Sustainability</h3>
          <p>
            Automated irrigation and sensor-based management reduce water wastage.
          </p>
        </div>

      </div>

      {/* ================= PRODUCTION GROWTH ================= */}

      <div className="dashboard-chart" style={{ marginTop: "40px" }}>
        <h2>📈 Production Growth Over Years (Tonnes/Acre)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={productionGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="yield"
              stroke="#16a34a"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ================= YIELD COMPARISON ================= */}

      <div className="dashboard-chart" style={{ marginTop: "40px" }}>
        <h2>🌱 Yield Comparison</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={yieldComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ================= PROFITABILITY ================= */}

      <div className="dashboard-chart" style={{ marginTop: "40px" }}>
        <h2>💰 Profitability Improvement</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={profitabilityData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {profitabilityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* ================= CASE STUDY ================= */}

      <div className="about-footer" style={{ marginTop: "40px" }}>
        <h2>📚 Case Study: Smart Polyhouse Implementation</h2>

        <p>
          A commercial gerbera farm implemented IoT-based monitoring with
          automated irrigation and Random Forest prediction.
        </p>

        <ul>
          <li>🌡 18% improved temperature stability</li>
          <li>💧 22% reduction in water usage</li>
          <li>🌸 30% increase in flower yield</li>
          <li>💰 25% profit improvement within 1 year</li>
        </ul>

        <p>
          The integration of sensor data and Machine Learning significantly
          enhanced operational efficiency and crop productivity.
        </p>
      </div>

      {/* ================= SYSTEM SUMMARY ================= */}

      <div className="about-footer" style={{ marginTop: "40px" }}>
        <h2>🌱 Smart Gerbera Monitoring System</h2>
        <p>
          This system integrates sensor data (Temperature, Humidity, NPK,
          pH, Light Intensity) with a Random Forest model to predict:
        </p>

        <ul>
          <li>✔ Pump Activation</li>
          <li>✔ Light Control</li>
          <li>✔ Crop Productivity Status</li>
        </ul>

        <p>
          By combining IoT and Machine Learning, the system ensures optimized
          polyhouse conditions and improved flower yield.
        </p>
      </div>

    </div>
  );
}
