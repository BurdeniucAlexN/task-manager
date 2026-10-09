import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <ul className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}

export default App;
