import React, { useEffect, useMemo, useState } from "react";
import List from "./components/List";
import { v4 as uuidv4 } from "uuid";

function MainComponent() {
  const mainTitle = "Note your task";
  const mainLable = "Task name";
  const [tasks, setTasks] = useState(() => {
    const storedTodos = localStorage.getItem("tasks");
    if (!storedTodos) {
      return [];
    } else {
      return JSON.parse(storedTodos);
    }
  });
  const [taskTitle, setTaskTitle] = useState("");

  const calculateTasks = useMemo(
    () => tasks.filter((task) => !task.status).length,
    [tasks]
  );

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    if (e.key === "Enter" && taskTitle.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          title: taskTitle,
          status: false,
          createdAt: new Date().toLocaleString(),
        },
      ]);
      setTaskTitle("");
    }
  };

  return (
    <div className="container">
      <h1>{mainTitle}</h1>
      <div className="header">
        <span>{`Today is ${day} ${month} ${year}`}</span>
        <span>{`You haven't finished ${calculateTasks} notes yet!`}</span>
      </div>
      <div className="input-field">
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyDown={addTask}
        />
        <label>{mainLable}</label>
      </div>
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default MainComponent;
