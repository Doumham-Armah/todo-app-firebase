// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import ToDoItem from "./toDoItem";
import AddItem from "./addItem";
import firebase from "../utils/firebase";
import "../styles.css";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);

  // get to do items from database and store them in state
  useEffect(() => {
    const toDoRef = firebase.database().ref("toDoItems");
    toDoRef.on("value", (snapshot) => {
      const items = snapshot.val();
      const toDos = [];
      for (let id in items) {
        toDos.push({ id, ...items[id] });
      }
      setToDos(toDos);
      console.log(toDos);
      console.log(toDos.length);
    });
  }, []);

  const updateCompleted = ({ item }) => {
    const toDoRef = firebase.database().ref("toDoItems").child(item.id);
    toDoRef.update({ completed: !item.completed });
  };

  // delete item from db
  const handleDelete = (id) => {
    const toDoRef = firebase.database().ref("toDoItems").child(id);
    toDoRef.remove();
  };

  return (
    <div className="todo-list">
      <h1>Hey Firebase!</h1>
      <AddItem />

      {toDos
        ? toDos.map((item, index) => (
            <ToDoItem
              key={index}
              item={item}
              handleChange={updateCompleted}
              handleDelete={handleDelete}
            />
          ))
        : null}
      {/* {console.log("toDos: ", toDos)} */}
    </div>
  );
};

export default ToDoList;
