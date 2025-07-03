import React from "react";
import "./MyTickets.css";

const MyTickets = () => {
  const tickets = [
    {
      id: 1234,
      subject: "Login issue",
      status: "In Progress",
      team: "Tech support",
      date: "13/08/21",
      rate: 3,
    },
    {
      id: 1124,
      subject: "New ticket issue",
      status: "On hold",
      team: "Operation Team",
      date: "14/08/21",
      rate: 2,
    },
    {
      id: 1224,
      subject: "New request",
      status: "Closed",
      team: "Tech support",
      date: "13/08/21",
      rate: 5,
    },
    {
      id: 1244,
      subject: "Ticket submission",
      status: "In Progress",
      team: "Operation Team",
      date: "14/08/21",
      rate: 0,
    },
    {
      id: 1114,
      subject: "Login issue",
      status: "In Progress",
      team: "Tech support",
      date: "03/08/21",
      rate: 1,
    },
  ];

  return (
    <div className="page-content">
      <h2>List of Ticket</h2>

      <div className="filter-bar">
        <input className="search-box" placeholder="Find ticket" />
        <div className="show-select">
          Show:{" "}
          <select>
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>{" "}
          Entries
        </div>
      </div>

      <table className="ticket-table">
        <thead>
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Support by</th>
            <th>Date</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.id}>
              <td>
                <a href="#">{t.id}</a>
              </td>
              <td>{t.subject}</td>
              <td>
                <span
                  className={`status ${t.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {t.status}
                </span>
              </td>
              <td>{t.team}</td>
              <td>{t.date}</td>
              <td>
                {"⭐".repeat(t.rate)}
                {"☆".repeat(5 - t.rate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTickets;
