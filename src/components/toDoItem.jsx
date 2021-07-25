import { Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import React from "react";

function ToDoItem({ item, handleChange, handleDelete }) {
  const { toggle } = useTheme();

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };

  return (
    <div className={toggle ? "todo-item-dark" : "todo-item-light"}>
      <input
        id={item.id}
        type="checkbox"
        checked={item.completed}
        onChange={() => handleChange({ item })}
      />
      <label style={item.completed ? completedStyle : null} htmlFor={item.id}>
        {item.title}
      </label>

      <Button className="delete-button" onClick={() => handleDelete(item.id)}>
        Delete
      </Button>
    </div>
  );
}

export default ToDoItem;
