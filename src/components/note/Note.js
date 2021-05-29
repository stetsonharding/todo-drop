import React from "react";
import uuid from 'react-uuid'

import "./Note.css";

export default function Note({ note, setNote, title, setTitle, completedNote, setCompletedNote }) {


  function submitNote(e){
  e.preventDefault();
    if(note || title !== ""){
      setCompletedNote((prevState) =>[
        ...prevState,
        {id: uuid(), title: title, note: note}
      ])
    }

    setTitle("")
    setNote("")
  }

  console.log(completedNote)

  return (
    <>
      <div className="note__container">
        <div className="note-maker__note">
          <input
            id="input_note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Take a note..."
          />
        </div>

        <div className="note-maker__buttons-container">
          <button className="note-maker__submit-button" type="submit"  onClick={submitNote}>
            Submit
          </button>
          <button className="note-maker__close-button">Close</button>
        </div>
      </div>
    </>
  );
}
