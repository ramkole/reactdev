"use client";
import React, { createContext, useContext, useReducer } from "react";
import { taskReducer } from "./taskReducer";
import { State, TaskContextType, TaskProviderProps } from "./types";

const initialState: State = {
  tasks: [],
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export { TaskProvider, useTaskContext };
