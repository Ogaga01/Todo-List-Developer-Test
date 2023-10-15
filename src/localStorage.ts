import { Task } from "./types";

export const setLocalStorage = (task: Task) => {
  const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  existingTasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(existingTasks));
};

export const searchLocalStorage = (value: string) => {
  let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  if (tasks.length === 0) return;
  tasks = tasks.filter((task: Task) => {
    return task.todo.includes(value);
  });
};
