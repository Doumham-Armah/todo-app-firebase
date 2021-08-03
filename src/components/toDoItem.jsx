import { useTheme } from "../contexts/ThemeContext";
import React from "react";

function ToDoItem({ item, handleChange, handleDelete }) {
  const completedStyle = {
    // fontStyle: "italic",
    textDecoration: "line-through",
    opacity: "0.5",
  };

  return (
    <div className="todo">
      <input
        id={item.id}
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange({ item })}
      />
      <label style={item.completed ? completedStyle : null} htmlFor={item.id}>
        {item.title}
      </label>

      <button className="trash-btn" onClick={() => handleDelete(item.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default ToDoItem;
