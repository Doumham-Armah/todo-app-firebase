import React, { useState } from "react";
import firebase from "./utils/firebase";

const AddItem = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDoRef = firebase.database().ref("toDoItems");
    const item = {
      title,
      completed: false,
    };

    toDoRef.push(item);
    // console.log(toDos);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="enter to do"
        value={title.text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};

export default AddItem;
