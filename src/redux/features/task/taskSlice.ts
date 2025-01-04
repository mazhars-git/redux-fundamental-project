import { RootState } from "@/app/store";
import { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "abcd",
      title: "Initialize frontend",
      description: "Create Home page, and routing",
      dueDate: "2025-12-01",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "ssss",
      title: "Initialize frontend",
      description: "Create stage and routing",
      dueDate: "2025-12-01",
      isCompleted: false,
      priority: "Medium",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
