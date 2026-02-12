import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <FaExclamationTriangle className="notfound-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/" className="home-button">
          Go Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
