import React from "react";
import Item from "./Item";

const List = ({ tasks, setTasks }) => {
  return (
    <ul>
      {tasks.map((item) => (
        <Item key={item.id} {...item} tasks={tasks} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default List;
