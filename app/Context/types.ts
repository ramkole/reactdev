
import type { ReactNode } from "react";

export interface Task {
    id: number;
    name: string;
  }
  
export interface State {
    tasks: Task[];
  }
  
export type Action =
    | { type: "ADD_TASK"; payload: Task }
    | { type: "REMOVE_TASK"; payload: number };

export    interface TaskContextType {
        state: State;
        dispatch: React.Dispatch<Action>;
      }
  
export  interface TaskProviderProps {
        children: ReactNode;
      }