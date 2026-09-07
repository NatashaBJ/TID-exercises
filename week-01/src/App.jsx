import "./App.css";
import ToDoList from "./ToDoList.jsx";

export default function App() {
  return (
    <>
      <ToDoList
        firstName={"Natasha"}
        initialTodos={["make github repo", "buy lunch", "eat lunch"]}
      />
      <ToDoList
        firstName={"Niels"}
        initialTodos={["go running, buy dinner", "eat dinner"]}
      />
    </>
  );
}

/* 
import "./App.css";
import ToDoList from "./ToDoList.jsx";

export default function App() {
  const myToDoList = ["make github repo", "buy lunch", "eat lunch"];
  return (
    <>
      <ToDoList firstName={"Natasha"} todos={myToDoList} />
    </>
  );
}
*/
