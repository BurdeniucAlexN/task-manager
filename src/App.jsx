import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("toate");

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "finalizate") return task.completed;
    return true;
  });

  return (
    <main>
      <h1>Task Manager</h1>

      <div className="stats">
        <p>Total sarcini: {tasks.length}</p>
        <p>Finalizate: {completedCount}</p>
      </div>

      <TaskForm onAddTask={addTask} />

      <div className="filters">
        <button
          className={filter === "toate" ? "active" : ""}
          onClick={() => setFilter("toate")}
        >
          Toate
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={filter === "finalizate" ? "active" : ""}
          onClick={() => setFilter("finalizate")}
        >
          Finalizate
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">Nu există sarcini momentan.</p>
      ) : visibleTasks.length === 0 ? (
        <p className="empty">Nicio sarcină în această categorie.</p>
      ) : (
        <ul className="task-list">
          {visibleTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
