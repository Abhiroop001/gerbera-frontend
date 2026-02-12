import { useState } from "react";
import axios from "axios";
import { GiLightBulb, GiWaterRecycling } from "react-icons/gi";
import { MdCheckCircle, MdCancel } from "react-icons/md";


const API_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:10000/predict";

const featureColumns = [
  "Nitrogen",
  "Phosphorus",
  "Potassium",
  "Temperature",
  "Humidity",
  "pH_Value",
  "Light_Intensity_LUX"
];

export default function Prediction() {

  const [data, setData] = useState(
    Object.fromEntries(featureColumns.map((f) => [f, ""]))
  );

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validateInputs = () => {
    for (let key of featureColumns) {
      if (data[key] === "" || isNaN(data[key])) {
        return `Please enter valid numeric value for ${key}`;
      }
    }
    return null;
  };

  const handleSubmit = async () => {
    setError("");
    setResult(null);

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      // Proper feature encoding
      const encodedData = {};
      featureColumns.forEach((feature) => {
        encodedData[feature] = parseFloat(data[feature]);
      });

      const res = await axios.post(API_URL, encodedData);
      setResult(res.data);

    } catch (err) {
      setError("Unable to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-page">

      <h1>🌼 Gerbera Smart Prediction</h1>

      <div className="prediction-container">

        {/* ---------------- FORM SECTION ---------------- */}
        <div className="prediction-form">
          <h3>Enter Sensor Values</h3>

          {featureColumns.map((key) => (
            <div key={key} className="input-group">
              <label>{key}</label>
              <input
                type="number"
                name={key}
                value={data[key]}
                onChange={handleChange}
                placeholder={`Enter ${key}`}
              />
            </div>
          ))}

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Predicting..." : "Predict"}
          </button>

          {error && <p className="error-text">{error}</p>}
        </div>

        {/* ---------------- RESULT SECTION ---------------- */}
        {result && (
          <div className="prediction-result">

            <h3>Prediction Result</h3>

            {/* Pump */}
            <div className={`result-card ${result.Pump_ON ? "active" : "inactive"}`}>
              <GiWaterRecycling
                className={`result-icon ${result.Pump_ON ? "icon-on" : "icon-off"}`}
              />
              <p>Pump: {result.Pump_ON ? "ON" : "OFF"}</p>
              {result.Pump_ON ? <MdCheckCircle /> : <MdCancel />}
            </div>

            {/* Light */}
            <div className={`result-card ${result.Light_ON ? "active" : "inactive"}`}>
              <GiLightBulb
                className={`result-icon ${result.Light_ON ? "icon-on" : "icon-off"}`}
              />
              <p>Light: {result.Light_ON ? "ON" : "OFF"}</p>
              {result.Light_ON ? <MdCheckCircle /> : <MdCancel />}
            </div>

            {/* Productivity */}
            <div className={`result-card ${result.Gerbera_Productable ? "active" : "inactive"}`}>
              <p>🌸 Productable: {result.Gerbera_Productable ? "YES" : "NO"}</p>
              {result.Gerbera_Productable ? <MdCheckCircle /> : <MdCancel />}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
