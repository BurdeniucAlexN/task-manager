function Task({ task }) {
  return (
    <li className="task">
      <span>☐ {task.title}</span>
      <button>Șterge</button>
    </li>
  );
}

export default Task;
