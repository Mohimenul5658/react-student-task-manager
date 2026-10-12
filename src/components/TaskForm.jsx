import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a task!");
      return;
    }

    onAddTask(title.trim());
    setTitle("");
    setError("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-input"
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-button" type="submit">
        + Add Task
      </button>

      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TaskForm;
