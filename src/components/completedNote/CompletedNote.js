import React, { useState } from "react";

import "./CompletedNote.css";
import Modal from "../modal/Modal";

export default function CompletedNote({ FullNote, setCompletedNote, completedNote }) {
  const [isModalShown, setIsModalShown] = useState(false);
  const [toggleClass, setToggleClass] = useState(false)
  const EditNote = () => {
    setIsModalShown(true);
  };


const DeleteNote = (id) => {
  setToggleClass(true)

setTimeout(() => {
  setCompletedNote(completedNote.filter(note => note.id !== id))
}, 700);
}

  return (
    <>
    <div key={FullNote.id} className={toggleClass ? "completed-note__information-container-removed" :"completed-note__information-container" }>
      <div className="completed-note__information">
        <p className="completed-note__title">{FullNote.title}</p>
        <hr />
        <p className="completed-note__note">{FullNote.note}</p>
      </div>
      <div className="completed-note__button-container">
        <button
          className="completed-note_edit-button"
          onClick={() => EditNote()}
        >
          Edit
        </button>
        <button className="completed-note_Delete-button" onClick={() =>DeleteNote(FullNote.id)}>Drop</button>
      </div>
       </div>
      <div>
      {isModalShown && (
        <Modal
          FullNote={FullNote}
          setCompletedNote={setCompletedNote}
          setIsModalShown={setIsModalShown}
          setToggleClass={setToggleClass}
        />
      )}
      </div>
      </>
  );
}
