import React from "react";
import { useState } from "react";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e) => {
    // const newTask = {};
    e.preventDefault(); // Prevent sending the form data to a page;

    // Do some validation
    if (!task || !day) {
      alert("Tou have to provide a Task and a Day");
      return;
    }

    // Create an Id
    const id = Math.floor(Math.random() * 10000) + 1;

    // Random to a max number
    // const m = Math.floor(Math.random() * 10000) + 1;

    // Random between ranges
    // const r = ((Math.floor(Math.random() * (10 - 5)) + 1) % (11 - 5)) + 5;

    // Add the new nask to task
    onAddTask({ id, task, day, reminder });
    cleanUpForm();
  };
  const cleanUpForm = () => {
    setTask("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="" className="form-control-label">
            Task
          </label>
          <input
            type="text"
            className="form-control-input"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="" className="form-control-label">
            Day & Time
          </label>
          <input
            type="text"
            className="form-control-input"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control-check form-control">
          <label htmlFor="" className="form-control-check-label">
            Set Reminder
          </label>
          <input
            type="checkbox"
            className="form-control-check-input"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    </div>
  );
}

export default AddTask;
