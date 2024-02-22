"use client";

import { combineReducers } from "redux";
import tasksReducer from "./features/task/taskSlice";

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
