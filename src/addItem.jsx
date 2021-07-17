import React, { useState } from "react";

const AddItem = ({ toDos, setToDos }) => {
  const [item, setItem] = useState({ text: "", completed: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedTodos = toDos;
    setToDos(updatedTodos.push(item));
    // console.log(toDos);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItem({ [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="enter to do"
        value={item.text}
        onChange={handleChange}
        onDelete={handleDelete}
      />
      <button>Add</button>
    </form>
  );
};

export default AddItem;
