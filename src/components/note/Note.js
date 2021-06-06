import React from "react";
import uuid from "react-uuid";

import "./Note.css";

export default function Note({
  note,
  setNote,
  title,
  setTitle,
  setCompletedNote,
}) {



  const SubmitNote =(e) =>{
    e.preventDefault();
  
    if (note || title !== "") {
      setCompletedNote((prevState) => [
        ...prevState,
        { id: uuid(), title: title, note: note },
      ]);
    }

    setTitle("");
    setNote("");
  }

  return (
    <>
      <div className="note__container">
        <input
          id="input_note"
          placeholder="note..."
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          autoComplete="off"
        />

        <div className="note__buttons-container">
          <button
            className="note__submit-button"
            type="submit"
            onClick={SubmitNote}
          >
            Take Note
          </button>
          <button className="note__close-button">Close</button>
        </div>
      </div>
    </>
  );
}
