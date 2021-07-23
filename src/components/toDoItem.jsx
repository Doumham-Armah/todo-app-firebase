import React from "react";
import { Button } from "react-bootstrap";


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
        onChange={() => handleChange({ item })}
      />
      <p style={item.completed ? completedStyle : null}>{item.title}</p>
      <Button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</Button>
    </div>
  );
}

export default ToDoItem;
