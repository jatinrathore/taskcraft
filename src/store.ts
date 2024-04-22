import { create } from "zustand";

interface TaskCraftStore {
  isSignupActive: boolean;
  setSignupActive: (value: boolean) => void;
}

const useTaskCraftStore = create<TaskCraftStore>((set) => ({
  isSignupActive: true,
  setSignupActive: (value: boolean) =>
    set((store) => ({ ...store, isSignupActive: value })),
}));

export default useTaskCraftStore;
