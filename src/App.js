import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import NewTicket from "./pages/NewTicket";
import MyTickets from "./pages/MyTickets";
import UserProfile from "./pages/UserProfile";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Authenticated Layout with Sidebar + Header */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/new-ticket"
          element={
            <Layout>
              <NewTicket />
            </Layout>
          }
        />
        <Route
          path="/my-tickets"
          element={
            <Layout>
              <MyTickets />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

const Layout = ({ children }) => (
  <div>
    <Header /> {/* Top header stays at top */}
    <div style={{ display: "flex" }}>
      <Sidebar /> {/* Sidebar on the left */}
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  </div>
);

export default App;
