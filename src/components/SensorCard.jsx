export default function SensorCard({ title, value, unit }) {

  let status = "good";

  if (value > 80 || value < 20) status = "critical";
  else if (value > 70 || value < 30) status = "warning";

  return (
    <div className={`card ${status}`}>
      <h3>{title}</h3>
      <p>{value} {unit}</p>
      <span className="badge">{status.toUpperCase()}</span>
    </div>
  );
}
