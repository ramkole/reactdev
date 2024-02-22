"use client";

import React, { useState } from "react";
import { useTaskContext } from "../Context/TaskContext";

const AddTask: React.FC = () => {
  const { state, dispatch } = useTaskContext();

  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), name: taskName },
      });

      setTaskName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
