import React, { useState } from "react";

const Item = ({ id, title, status, setTasks, tasks, createdAt }) => {
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  function updateStatus() {
    setChecked(!checked);
    tasks.map((item) => {
      if (item.id === id) {
        item.status = !checked;
      }
      return true;
    });
    setTasks([...tasks]);
  }

  function removeItem() {
    setTasks([...tasks.filter((item) => item.id !== id)]);
  }

  return (
    <li className={classes.join(" ")}>
      <label>
        <input type="checkbox" checked={checked} onChange={updateStatus} />
        <span>{title}</span>
        <p>{createdAt}</p>
        <i onClick={removeItem} className="material-icons red-text">
          X
        </i>
      </label>
    </li>
  );
};

export default Item;
