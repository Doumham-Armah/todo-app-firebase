// import logo from "./logo.svg";
import { getData } from "./data";
import ToDoItem from "./toDoItem";
import { useState } from "react";
import "./styles.css";

function App() {
  const [toDos, setToDos] = useState(getData());

  function updateCompleted(id) {
    const updatedTodos = toDos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    console.log(updatedTodos);
    setToDos(updatedTodos);
    // console.log("Inside updateCompleted()");
  }

  return (
    <div className="todo-list">
      <h1>Hey Firebase!!!</h1>
      {toDos.map((item) => (
        // console.log(item)

        <ToDoItem key={item.id} item={item} handleChange={updateCompleted} />
      ))}
      {/* {console.log(toDos)} */}
    </div>
  );
}

export default App;
