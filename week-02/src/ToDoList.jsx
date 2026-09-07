import { useEffect, useState } from "react";
import NewToDoForm from "./NewTodoForm";
import TodoItem from "./TodoItem";

function loadTodos() {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
}

//This takes the firstname and todos props from App:
export default function ToDoList({ firstName, initialtodos }) {
  let h1Style = { color: "deeppink", backgroundColor: "white" };
  //This creates state:
  //todoList = current list
  //setTodolist ) function that changes the list
  const [todos, setTodolist] = useState(loadTodos);
  //useState(todos): means start my state with the todos that I received from App.
  //why is the todoList the current list? Is it not todos??

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Responsible for adding a item to the list:
  function handleAdd(text) {
    //This takes the existing list and creates a new array with the new to do given as input
    setTodolist([...todos, { id: crypto.randomUUID(), text, done: false }]);
  }

  function handleToggle(id) {
    setTodolist(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function handleRemove(id) {
    setTodolist(todos.filter((t) => t.id !== id));
  }

  return (
    <>
      <h1 style={h1Style}>To Do List for {firstName}</h1>
      {todos.length === 0 ? (
        <p>Nothing to do. Enjoy the afternoon</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onRemove={handleRemove}
            />
          ))}
        </ul>
      )}
      <NewToDoForm onAdd={handleAdd} />
    </>
  );
}
