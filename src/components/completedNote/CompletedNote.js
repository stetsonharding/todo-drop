import React from "react";

import "./CompletedNote.css";

export default function CompletedNote(props) {
  return (
    <div key={props.id} className="completed-note__information-container">
      <div className="completed-note__information">
        <p className="completed-note__title">{props.title}</p>
        <p className="completed-note__note">{props.note}</p>
      </div>
      <div className="completed-note__edit">
        <button className="completed-note_edit-button">Edit</button>
      </div>
    </div>
  );
}
