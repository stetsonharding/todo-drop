import React, { useState } from "react";

import "./modal.css";

export default function Modal({
  title,
  note,
  setCompletedNote,
  CompletedNote,
  ...props
}) {
  const [newTitle, setNewTitle] = useState("");

  function handleOk(id, newTitle) {}

  return (
    <div className="modal__container">
      <div className="modal__note-information">
        <p>Edit Note:</p>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <br />
        <input type="text" value={note} onChange="" />

        <div className="modal__button-container">
          <button className="modal__ok-button" onClick={handleOk}>
            Ok
          </button>
          <button className="modal__cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
