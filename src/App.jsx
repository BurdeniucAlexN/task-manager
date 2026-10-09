import { useState } from "react";
import TaskForm from "./components/TaskForm";
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
      <p>Sarcini în memorie: {tasks.length}</p>
    </main>
  );
}

export default App;
