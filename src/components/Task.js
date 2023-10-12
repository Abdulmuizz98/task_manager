import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onToggle, onDelete }) {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.task}{" "}
        <FaTimes onClick={() => onDelete(task.id)} style={{ color: "red" }} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
