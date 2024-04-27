import { create } from "zustand";
import {
  TaskType,
  CategoryType,
  defaultTasks,
  defaultCategories,
} from "./service/defaultData";

interface TaskCraftStore {
  tasks: TaskType[];
  categories: CategoryType[];
  isSignupActive: boolean;
  setSignupActive: (value: boolean) => void;
  setTasks: (updatedTasks: TaskType[]) => void;
}

// Setting default tasks in user's browser
// localStorage.setItem(
//   import.meta.env.VITE_LOCAL_STORAGE_TASK,
//   JSON.stringify(defaultTasks)
// );

// Setting default category in user's browser
// localStorage.setItem(
//   import.meta.env.VITE_LOCAL_STORAGE_CATEGORY,
//   JSON.stringify(defaultCategories)
// );

const useTaskCraftStore = create<TaskCraftStore>((set) => ({
  tasks: (() => {
    const storedTasks = localStorage.getItem(
      import.meta.env.VITE_LOCAL_STORAGE_TASK
    );
    return storedTasks ? JSON.parse(storedTasks) : defaultTasks;
  })(),

  categories: (() => {
    const storedCategories = localStorage.getItem(
      import.meta.env.VITE_LOCAL_STORAGE_CATEGORY
    );
    return storedCategories ? JSON.parse(storedCategories) : defaultCategories;
  })(),

  isSignupActive: true,

  setSignupActive: (value: boolean) =>
    set((store) => ({ ...store, isSignupActive: value })),

  setTasks: (updatedTasks: TaskType[]) => {
    // Update tasks state
    set((store) => ({ ...store, tasks: updatedTasks }));

    // Update tasks in localStorage
    localStorage.setItem(
      import.meta.env.VITE_LOCAL_STORAGE_TASK,
      JSON.stringify(updatedTasks)
    );
  },
}));

export default useTaskCraftStore;
