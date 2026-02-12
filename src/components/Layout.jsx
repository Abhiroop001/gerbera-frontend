import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaUserCircle } from "react-icons/fa";

export default function Layout() {
  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="main-section">

        {/* Top Navbar */}
        <div className="topbar">
          <h2>🌼 Gerbera Smart Polyhouse</h2>
          <FaUserCircle className="user-icon" />
        </div>

        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
}
