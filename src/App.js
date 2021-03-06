import React, { useState } from "react";
import "./App.css";

import NoteTitle from "./components/note-title/NoteTitle";
import CompletedNote from "./components/completedNote/CompletedNote";

export default function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [completedNote, setCompletedNote] = useState([]);
  
  console.log(completedNote)

  return (
    <>
      <NoteTitle
        title={title}
        setTitle={setTitle}
        note={note}
        setNote={setNote}
        completedNote={completedNote}
        setCompletedNote={setCompletedNote}
      />

      <div className="completed-note__container">
        {completedNote.map((FullNote) => (
          <CompletedNote
            key={FullNote.id}
            setCompletedNote={setCompletedNote}
            completedNote={completedNote}
            FullNote={FullNote}
          />
        ))}
      </div>
    </>
  );
}
