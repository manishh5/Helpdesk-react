import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="page-content">
      <h2>User Profile</h2>
      <div className="profile-wrapper">
        <div className="profile-card">
          <div className="avatar"></div>
          <p>Username: John Doe</p>
          <p>Contact Number: +91 9876543210</p>
          <p>Email: john@example.com</p>
          <p>Department: Tech Support</p>
        </div>
        <div className="feedback-card">
          <h4>Give Your Feedback</h4>
          <textarea defaultValue="[Lorem Ipsum]"></textarea>
          <div className="stars">⭐⭐⭐⭐⭐</div>
          <button>Submit Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
