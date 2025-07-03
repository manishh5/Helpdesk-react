import React from "react";
import "./NewTicket.css";
import { FaPaperclip } from "react-icons/fa";

const NewTicket = () => {
  return (
    <div className="new-ticket-container">
      <h2 className="new-ticket-heading">Create New Ticket</h2>
      <form className="ticket-form">
        <div>
          <label>Ticket No.</label>
          <input type="text" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" />
        </div>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Department</label>
          <input type="text" />
        </div>
        <div className="subject-full">
          <label>Subject</label>
          <input type="text" />
        </div>
        <div>
          <label>Category</label>
          <input type="text" />
        </div>
        <div style={{ position: "relative" }}>
          <label>Description</label>
          <textarea className="description-area" />
          <FaPaperclip className="attachment-icon" />
        </div>
        <div>
          <label>Type</label>
          <input type="text" />
        </div>
        <div>
          <label>Priority</label>
          <input type="text" />
        </div>

        <div className="bottom-section">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTicket;
