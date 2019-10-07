import React, { useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Notes = () => {
  //state
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes([...notes, note]);
  };

  const deleteNote = id => {
    const deletedNotes = notes.filter((_, i) => i !== id);
    setNotes(deletedNotes);
  };

  const renderNotes = notes.map((note, i) => (
    <Note key={i} id={i} name={note.name} del={deleteNote} />
  ));

  return (
    <div>
      <AddNote add={addNote} />
      <div>{notes.length === 0 ? <p>There are no Notes</p> : renderNotes}</div>
    </div>
  );
};

export default Notes;
