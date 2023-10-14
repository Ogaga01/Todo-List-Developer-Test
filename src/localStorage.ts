import { Task } from "./types";

export const tasks: Task[] = [];

export const setLocalStorage = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};


