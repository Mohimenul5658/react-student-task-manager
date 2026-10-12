function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />

      <span className={`task-title ${task.completed ? "completed" : ""}`}>
        {task.title}
      </span>

      <span className={`status ${task.completed ? "done" : "pending"}`}>
        {task.completed ? "Completed" : "Pending"}
      </span>

      <button
        className="delete-button"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this task?")) {
            onDeleteTask(task.id);
          }
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
