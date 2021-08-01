import { Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import React from "react";

function ToDoItem({ item, handleChange, handleDelete }) {
  const { toggle } = useTheme();

  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    opacity: "0.5",
  };

  return (
    // <div className={toggle ? "todo-item-dark" : "todo-item-light"}>
    <div className="todo">
      <label style={item.completed ? completedStyle : null} htmlFor={item.id}>
        {item.title}
      </label>

      <input
        id={item.id}
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange({ item })}
      />

      <button className="trash-btn" onClick={() => handleDelete(item.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>

    // </div>
  );
}

export default ToDoItem;
