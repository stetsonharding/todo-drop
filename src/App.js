import React, { useState } from "react";
import "./App.css";

import NoteTitle from "./components/note-title/NoteTitle";

export default function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [completedNote, setCompletedNote] = useState([]);

  
  return (
    <NoteTitle
      title={title}
      setTitle={setTitle}
      note={note}
      setNote={setNote}
      completedNote={completedNote}
      setCompletedNote={setCompletedNote}
    />
  );
}
