import React from "react";
import "./SignIn.css";

const ForgotPassword = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <p style={{ marginBottom: "20px" }}>
          Don’t worry. Enter your email below and we will send you a link to
          change password.
        </p>
        <input type="email" placeholder="Email" className="input-field" />
        <button className="signin-button">Submit</button>
        <button className="signup-button" style={{ marginTop: "10px" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Sign In
          </a>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
