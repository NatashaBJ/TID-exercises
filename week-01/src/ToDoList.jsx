import { useState } from "react";

export default function ToDoList({ firstName, initialTodos }) {
  let h1Style = { backgroundColor: "white", color: "pink" };
  let ulStyle = { backgroundColor: "white", color: "brown" };

  const [todos, setTodos] = useState(initialTodos);

  function handleAdd(event) {
    setTodos([...todos, "new task"]);

    //Giving the new todos list a variable name:
    //let newTodos = [...todos, "new task"];
    //setTodos(newTodos);
  }

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      <ul style={ulStyle}>
        {todos.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
      <form>
        <input value="text"></input>
        <button onClick={handleAdd}>Add task</button>
      </form>
    </>
  );
}
