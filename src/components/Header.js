import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="brand">Helpdesk</div>
      <div className="header-icons">
        <FaUser onClick={() => navigate("/profile")} />
        <FaSignOutAlt onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Header;
