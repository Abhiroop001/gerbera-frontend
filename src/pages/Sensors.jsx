import {
  FaThermometerHalf,
  FaTint,
  FaSeedling,
  FaFlask,
  FaSun,
  FaMicrochip,
  FaWifi,
  FaDatabase,
  FaBell
} from "react-icons/fa";

import dfdImage from "../assets/dfd.png";

export default function Sensors() {
  return (
    <div className="sensors-page">

      <h1>🌼 Gerbera Polyhouse Sensor & System Overview</h1>

      <p className="sensor-intro">
        The Gerbera Smart Polyhouse system integrates multiple environmental
        sensors with IoT modules and a cloud-based Machine Learning platform
        to optimize irrigation, lighting, and crop productivity.
      </p>

      {/* Sensor Section */}
      <h2>📡 Sensor Module</h2>

      <div className="sensor-grid">

        <div className="sensor-card">
          <FaThermometerHalf className="sensor-icon" />
          <h3>Temperature & Humidity (DHT11)</h3>
          <p>
            Measures environmental temperature and humidity to maintain
            optimal growing conditions (18–28°C, 60–80% RH).
          </p>
        </div>

        <div className="sensor-card">
          <FaTint className="sensor-icon" />
          <h3>Soil Moisture Sensor</h3>
          <p>
            Detects soil water level to automate irrigation control
            and prevent overwatering or drought stress.
          </p>
        </div>

        <div className="sensor-card">
          <FaSeedling className="sensor-icon" />
          <h3>Soil Nutrient Sensor (NPK)</h3>
          <p>
            Monitors Nitrogen, Phosphorus, and Potassium levels
            to ensure balanced fertilization.
          </p>
        </div>

        <div className="sensor-card">
          <FaFlask className="sensor-icon" />
          <h3>Soil pH Sensor</h3>
          <p>
            Maintains optimal pH range (5.5–6.5) for proper nutrient absorption.
          </p>
        </div>

        <div className="sensor-card">
          <FaSun className="sensor-icon" />
          <h3>Light Sensor (LDR - LM393)</h3>
          <p>
            Measures light intensity in lux to control artificial lighting
            and shade systems.
          </p>
        </div>

      </div>

      {/* System Architecture */}
      <h2>⚙ System Architecture</h2>

      <div className="system-grid">

        <div className="system-card">
          <FaMicrochip className="system-icon" />
          <h3>Microcontroller (Arduino / ESP8266)</h3>
          <p>
            Collects sensor data and controls relay/dimmer circuits
            for pump and lighting systems.
          </p>
        </div>

        <div className="system-card">
          <FaWifi className="system-icon" />
          <h3>Wi-Fi Module</h3>
          <p>
            Transmits real-time sensor data to cloud services
            like Ubidots or ThingSpeak.
          </p>
        </div>

        <div className="system-card">
          <FaDatabase className="system-icon" />
          <h3>Cloud Database</h3>
          <p>
            Stores environmental data for visualization and
            Machine Learning analysis.
          </p>
        </div>

        <div className="system-card">
          <FaBell className="system-icon" />
          <h3>Notification System</h3>
          <p>
            Generates alerts and insights based on Deep Learning
            predictions.
          </p>
        </div>

      </div>

      {/* DFD Image */}
      <h2>📊 Data Flow Diagram (DFD)</h2>

      <div className="dfd-container">
        <img src={dfdImage} alt="Gerbera Polyhouse DFD" />
      </div>

    </div>
  );
}
