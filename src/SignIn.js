import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="title">Helpdesk System</h2>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <Link to="/dashboard">
          <button className="signin-button">Sign In</button>
        </Link>
        <div className="link-row">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password
          </Link>
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
