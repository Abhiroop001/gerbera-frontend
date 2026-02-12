import { FaThermometerHalf, FaTint, FaSeedling, FaSun } from "react-icons/fa";

export default function SensorHealth() {

  // Example sensor health data (you can later connect to backend)
  const sensors = [
    { name: "Temperature Sensor", value: 26, icon: <FaThermometerHalf /> },
    { name: "Humidity Sensor", value: 68, icon: <FaTint /> },
    { name: "NPK Sensor", value: 95, icon: <FaSeedling /> },
    { name: "Light Sensor", value: 22000, icon: <FaSun /> }
  ];

  const getStatus = (value) => {
    if (value < 20) return "Critical";
    if (value < 40) return "Warning";
    return "Healthy";
  };

  const getClass = (status) => {
    if (status === "Critical") return "health-card critical";
    if (status === "Warning") return "health-card warning";
    return "health-card healthy";
  };

  return (
    <div className="sensor-health">
      <h1>📡 Sensor Health Monitoring</h1>

      <div className="health-grid">
        {sensors.map((sensor, index) => {
          const status = getStatus(sensor.value);
          return (
            <div key={index} className={getClass(status)}>
              <div className="health-icon">{sensor.icon}</div>
              <h3>{sensor.name}</h3>
              <p>Status: <strong>{status}</strong></p>
              <div className="status-bar">
                <div
                  className="status-fill"
                  style={{ width: `${sensor.value}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
