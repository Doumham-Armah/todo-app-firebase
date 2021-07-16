import React from "react";

function ToDoItem({ item, handleChange }) {
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
        onChange={() => handleChange(item.id)}
      />
      <p style={item.completed ? completedStyle : null}>{item.text}</p>
    </div>
  );
}

export default ToDoItem;
