"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../toolkit/features/task/taskSlice";

function CreateTask() {
  const dispatch = useDispatch();

  //@ts-ignore

  const tasks = useSelector((state) => state.tasks);

  const handleAddTask = () => {
    dispatch(addTask({ id: new Date(), title: "New Task" }));
  };
  //@ts-ignore
  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

  return (
    <div>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task: { id: number; title: string }) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CreateTask;
