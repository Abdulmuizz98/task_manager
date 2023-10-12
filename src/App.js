import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  // Handles toggling the task reminder
  const handleToggleReminder = async (id) => {
    const taskToUpdate = tasks.find((task) => id === task.id);

    taskToUpdate.reminder = !taskToUpdate.reminder;

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskToUpdate),
    });

    const data = await res.json();
    setTasks(tasks.map((task) => (task.id !== id ? task : data)));
  };

  // Handles deleting  a task
  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setTasks(tasks.filter((task) => id !== task.id));
  };

  // Handles adding a new task logic
  const handleAddTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    console.log(data);

    setTasks([...tasks, data]);
  };

  // Handles opening and closing AddTask form
  const handleShowAddTask = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Manger"
          showAddTask={showAddTask}
          showAddTaskHandler={handleShowAddTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAddTask={handleAddTask} />}
                {tasks.length ? (
                  <Tasks
                    tasks={tasks}
                    onToggle={handleToggleReminder}
                    onDelete={handleDeleteTask}
                  />
                ) : (
                  "No tasks to show"
                )}
              </>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
