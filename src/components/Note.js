import React from "react";

const Note = ({ name, del, id }) => (
  <p>
    {name} <button onClick={() => del(id)}>x</button>
  </p>
);

export default Note;
