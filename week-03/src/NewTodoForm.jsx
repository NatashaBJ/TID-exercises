import { useState } from "react";

//This handles the input and button
export default function NewToDoForm({ onAdd }) {
  //State:
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(text);
    setText("");
  }

  return (
    //Clicking Add triggers <form onSubmit={handleSubmit}> which calls handleSubmit(event)
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="New Task"
      />
      <button id="add-button" disabled={text.trim().length === 0}>
        Add
      </button>
    </form>
  );
}
