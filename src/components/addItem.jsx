import React, { useState } from "react";
import { auth, db } from "../firebase";

const AddItem = () => {
  const [title, setTitle] = useState("");

  // add to-do item of user to db on form submit
  const handleSubmit = (e) => {
    setTitle("");
    e.preventDefault();

    const uid = auth.currentUser.uid;

    const item = {
      title,
      completed: false,
    };
    // if to-do item not empty only then push to db
    if (item.title) db.ref("users").child(uid).push(item);

    // .then((item) => {
    //     console.log('Saved Data', item)
    // })
    // .catch((error) => {
    //     console.log('Storing Error', error)
    // })
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="to-do text"
          placeholder="enter to do"
          value={title}
          onChange={handleChange}
        />
        <button>+</button>
      </form>
    </div>
  );
};

export default AddItem;
