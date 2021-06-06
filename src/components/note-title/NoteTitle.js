import React, { useState, useEffect, useRef } from "react";

import Note from "../note/Note";
import "./NoteTitle.css";

export default function NoteTitle({
  title,
  setTitle,
  note,
  setNote,
  completedNote,
  setCompletedNote,
}) {
  const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);

  const wrapperRef = useRef(null);
  UseOutsideAlerter(wrapperRef);

  //hiding note when focused outside of inputs
  function UseOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsNoteDisplayed(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      <div className="note-title__maincontainer">
        <div className="note-title__sub-container">
          <div className="note-title__title-wrapper">
            <h1 className="note-title__title">Take a note... drop a note</h1>
          </div>

          <div className="note-title__input-container" ref={wrapperRef}>
            <input
              id="input_title"
              placeholder="Title..."
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onClick={() => setIsNoteDisplayed(true)}
              autoComplete="off"
            />
            {isNoteDisplayed ? (
              <Note
                note={note}
                setNote={setNote}
                title={title}
                setTitle={setTitle}
                completedNote={completedNote}
                setCompletedNote={setCompletedNote}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
