import React from "react";

import "./CompletedNote.css";

export default function CompletedNote({
  title,
  note,
  isModalShown,
  setIsModalShown,
  ...props
}) {
  return (
    <div key={props.id} className="completed-note__information-container">
      <div className="completed-note__information">
        <p className="completed-note__title">{title}</p>
        <p className="completed-note__note">{note}</p>
      </div>
      <div className="completed-note__edit">
        <button
          className="completed-note_edit-button"
          onClick={() => setIsModalShown(true)}
        >
          Edit
        </button>
        <button className="completed-note_Delete-button">Delete</button>
      </div>
    </div>
  );
}
