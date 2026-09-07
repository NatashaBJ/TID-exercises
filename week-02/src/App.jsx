import "./App.css";
import ToDoList from "./ToDoList.jsx";

function App() {
  //This creates an initial to do list array:
  const NatashasToDos = [
    { id: 1, text: "Call the landlord", done: false },
    { id: 2, text: "Book the dentist", done: false },
  ];

  return (
    //This passes that array to ToDoList
    //These are props
    <>
      <ToDoList firstName={"Natasha"} initialtodos={NatashasToDos} />
    </>
  );
}

export default App;
