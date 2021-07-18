import React from "react";

function ToDoItem({ item, handleChange, handleDelete }) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange(item.id, item.completed)}
      />
      <p style={item.completed ? completedStyle : null}>{item.title}</p>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
