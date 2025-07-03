import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="card-container">
        <div className="status-card blue">
          <h4>Total Tickets</h4>
          <div className="count">12</div>
        </div>
        <div className="status-card green">
          <h4>Total Solved</h4>
          <div className="count">8</div>
        </div>
        <div className="status-card red">
          <h4>Total Awaiting Approval</h4>
          <div className="count">2</div>
        </div>
        <div className="status-card yellow">
          <h4>Total In Progress</h4>
          <div className="count">2</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
