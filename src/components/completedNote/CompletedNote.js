import React from "react";

import "./CompletedNote.css";
import Modal from ".././modal/Modal";

export default function CompletedNote({
  FullNote,
  isModalShown,
  setIsModalShown,
  setCompletedNote,
}) {
  const showModal = () => {
    setIsModalShown(true);
  };

  return (
    <div key={FullNote.id} className="completed-note__information-container">
      <div className="completed-note__information">
        <p className="completed-note__title">{FullNote.title}</p>
        <p className="completed-note__note">{FullNote.note}</p>
      </div>
      <div className="completed-note__edit">
        <button
          className="completed-note_edit-button"
          onClick={() => showModal()}
        >
          Edit
        </button>
        <button className="completed-note_Delete-button">Delete</button>
      </div>
      {isModalShown ? (
        <Modal
          FullNote={FullNote}
          setCompletedNote={setCompletedNote}
          setIsModalShown={setIsModalShown}
        />
      ) : null}
    </div>
  );
}
