import React, { useState } from "react";

import "./Modal.css";

export default function Modal({
  FullNote,
  setCompletedNote,
  setIsModalShown,
  selectedNote,
}) {
  const [newTitle, setNewTitle] = useState(FullNote.title);
  const [newNote, setNewNote] = useState(FullNote.note);




  const EditNoteCompleted =(id, newTitle, newNote, e)=>{
    setCompletedNote((prevState) =>
      prevState.map((n) => {
        if (n.id === id) {
          return { ...n, title: newTitle, note: newNote };
        }
        return n;
      })
    );

    setIsModalShown(false);
  }

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

        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />

        <div className="modal__button-container">
          <button
            className="modal__ok-button"
            onClick={() => EditNoteCompleted(FullNote.id, newTitle, newNote)}
          >
            Ok
          </button>
          <button className="modal__cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
