import { z } from "zod";
import { TaskSchema, CategorySchema } from "../validation";
import { getDateInString } from "./dateInString";

export type TaskType = z.infer<typeof TaskSchema>;
export type CategoryType = z.infer<typeof CategorySchema>;

const defaultTaskDate = getDateInString(true);

export const defaultTasks: TaskType[] = [
  {
    id: "1",
    title: "Complete project report",
    description: "Finish the report for the quarterly review",
    category: {
      id: "1",
      title: "Work",
    },
    date: defaultTaskDate,
    isCompleted: false,
  },
  {
    id: "2",
    title: "Buy groceries",
    description: "Purchase fruits, vegetables, and milk",
    category: {
      id: "2",
      title: "Personal",
    },
    date: defaultTaskDate,
    isCompleted: false,
  },
  {
    id: "3",
    title: "Exercise",
    description: "Go for a jog in the park",
    category: {
      id: "3",
      title: "Health",
    },
    date: defaultTaskDate,
    isCompleted: false,
  },
  {
    id: "4",
    title: "Prepare presentation",
    description: "Gather materials and create slides",
    category: {
      id: "1",
      title: "Work",
    },
    date: defaultTaskDate,
    isCompleted: false,
  },
  {
    id: "5",
    title: "Schedule meetings",
    description: "Coordinate with team members and set up meetings",
    category: {
      id: "1",
      title: "Work",
    },
    date: defaultTaskDate,
    isCompleted: false,
  },
];

export const defaultCategories: CategoryType[] = [
  { id: "1", title: "Work" },
  { id: "2", title: "Personal" },
  { id: "3", title: "Health" },
];
