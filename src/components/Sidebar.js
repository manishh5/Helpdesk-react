import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FaTachometerAlt, FaPlus, FaList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Menu</h3>
      <nav>
        <Link to="/dashboard">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/new-ticket">
          <FaPlus /> New Ticket
        </Link>
        <Link to="/my-tickets">
          <FaList /> My Ticket
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
