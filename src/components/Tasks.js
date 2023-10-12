// import React from "react";
import Task from "./Task";

function Tasks({ tasks, onToggle, onDelete }) {
  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Tasks;
