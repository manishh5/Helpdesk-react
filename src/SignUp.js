import React from "react";
import "./SignIn.css";

const SignUp = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="title">Helpdesk System</h2>
        <p>Sign up here</p>
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <button className="signup-button">Sign Up</button>
        <div className="link-row">
          <a href="/forgot-password" className="forgot-password">
            Forgot password
          </a>
          <a href="/" className="signup">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
