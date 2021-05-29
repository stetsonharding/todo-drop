import React, { useState, useEffect, useRef } from "react";

import Note from "../note/Note";
import "./NoteTitle.css";

export default function NoteTitle({ title, setTitle, note, setNote, completedNote, setCompletedNote }) {
  const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);




  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

//hiding note when focused outside of inputs
  function useOutsideAlerter(ref) {
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


  // console.log(`title: ${title}`);
  // console.log(`note: ${note}`);

  return (
    <>
      <div className="note-maker__maincontainer">
        <div className="note-maker__sub-container">
          <div className="note-maker__input-container" ref={wrapperRef}>
            <div className="note-maker__title">
              <input
                id="input_title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title..."
                onClick={() => setIsNoteDisplayed(true)}
              />
            </div>
            {isNoteDisplayed ? <Note note={note} setNote={setNote} title={title} setTitle={setTitle} completedNote={completedNote} setCompletedNote={setCompletedNote} /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
