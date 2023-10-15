import { Task } from "./types";

export const setLocalStorage = (task: Task) => {
  const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  existingTasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(existingTasks));
};


