import React, { useState } from "react";
import "./App.css";

import NoteTitle from "./components/note-title/NoteTitle";
import CompletedNote from "./components/completedNote/CompletedNote";
import Modal from "./components/modal/modal";

export default function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [completedNote, setCompletedNote] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);

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
        {completedNote.map((note) => (
          <CompletedNote
            key={note.id}
            title={note.title}
            note={note.note}
            isModalShown={isModalShown}
            setIsModalShown={setIsModalShown}
            setCompletedNote={setCompletedNote}
            completedNote={completedNote}
          />
        ))}
      </div>

      {isModalShown ? (
        <Modal
          title={title}
          note={note}
          setCompletedNote={setCompletedNote}
          CompletedNote={CompletedNote}
        />
      ) : null}
    </>
  );
}
