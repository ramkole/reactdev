"use client";
import React from "react";
import { useTaskContext } from "../Context/TaskContext";

const TaskView: React.FC = () => {
  const { state, dispatch } = useTaskContext();
  return (
    <div>
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_TASK",
                      payload: task.id,
                    });
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskView;
