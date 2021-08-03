import { useEffect, useState } from "react";
import ToDoItem from "./toDoItem";
import AddItem from "./addItem";
import { auth, db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import { useHistory } from "react-router-dom";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const { toggle, toggleTheme } = useTheme();
  const history = useHistory;
  const user = auth.currentUser;
  const uid = user.uid;

  // fetch to-do items of a user from database and store them in state
  useEffect(() => {
    const toDoRef = db.ref("users").child(uid);
    toDoRef.on("value", (snapshot) => {
      const items = snapshot.val();
      const toDos = [];
      for (let id in items) {
        toDos.push({ id, ...items[id] });
      }
      setToDos(toDos);
    });
  }, []);

  const updateCompleted = ({ item }) => {
    // find user by UID-> item to update by item.id
    const toDoRef = db.ref("users").child(uid).child(item.id);
    toDoRef.update({ completed: !item.completed });
  };

  // delete item from db
  const handleDelete = (id) => {
    // find user by UID-> item to delete by item.id
    const toDoRef = db.ref("users").child(uid).child(id);
    toDoRef.remove();
  };

  async function handleLogOut() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const printName = (name) => name.substring(0, name.lastIndexOf("@"));

  return (
    <>
      <div className={toggle ? "body" : "body-dark"}>
        <h2 className="title">{`${printName(user.email)}'s to-do list`}</h2>

        <AddItem />

        <div className="todo-container">
          <div className="todo-list">
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
          </div>
        </div>

        <div className="buttons">
          <button className="toggle-btn" variant="link" onClick={toggleTheme}>
            <i className="fas fa-adjust fa-4x"></i>
          </button>
          <button className="logout-btn" variant="link" onClick={handleLogOut}>
            <i className="fas fa-sign-out-alt fa-4x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
