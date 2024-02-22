"use client";
import { Provider } from "react-redux";
import AddTask from "./components/CreateTask";
import TaskView from "./components/TaskView";
import "./globals.css";
import { store } from "./toolkit/store";

export default function Home() {
  return (
    <div className="flex flex-col border border-rose-500 w-full h-full justify-center items-center">
      <Provider store={store}>
        <AddTask />
        <TaskView />
      </Provider>
    </div>
  );
}
