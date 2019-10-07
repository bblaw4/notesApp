import React, { useState } from "react";

const AddNote = ({ add }) => {
  //state
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) return;
    const note = { name };
    add(note);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
      </div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddNote;
