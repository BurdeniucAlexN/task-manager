function Task({ task, onToggle, onDelete }) {
  return (
    <li className="task">
      <label className={task.completed ? "completed" : ""}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        {task.completed ? "✓ " : ""}
        {task.title}
      </label>
      <button onClick={() => onDelete(task.id)}>Șterge</button>
    </li>
  );
}

export default Task;
