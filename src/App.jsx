import { useState } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const onAddTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const onToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const onDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = tasks.length - completedTasks;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1>Student Task Manager</h1>
      <p className="subtitle">Stay organized. Get things done.</p>

      <TaskForm onAddTask={onAddTask} />

      <div className="stats">
        <div className="stat-card">
          <span>Total Tasks</span>
          <h2>{tasks.length}</h2>
        </div>
        <div className="stat-card">
          <span>Completed</span>
          <h2>{completedTasks}</h2>
        </div>
        <div className="stat-card">
          <span>Pending</span>
          <h2>{pendingTasks}</h2>
        </div>
      </div>

      <div className="filter-buttons">
        {["All", "Completed", "Pending"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <TaskList
        tasks={filteredTasks}
        onToggleTask={onToggleTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App;
