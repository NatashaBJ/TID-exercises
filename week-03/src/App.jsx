import "./App.css";
import ToDoList from "./ToDoList.jsx";

function App() {
  //This creates an initial to do list array:
  const NatashasToDos = [
    { id: 1, text: "Call the landlord", done: false },
    { id: 2, text: "Book the dentist", done: false },
  ];

  const NielsToDos = [
    { id: 1, text: "Call the landlord", done: false },
    { id: 2, text: "Book the dentist", done: false },
  ];

  return (
    //This passes that array to ToDoList
    //These are props
    <div className="main-inner">
      <ToDoList firstName={"Natasha"} initialtodos={NatashasToDos} />
      <ToDoList firstName={"Niels"} initialtodos={NielsToDos} />
    </div>
  );
}

export default App;
