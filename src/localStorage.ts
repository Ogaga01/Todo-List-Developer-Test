import { Task } from "./types";

export const setLocalStorage = (task: Task) => {
  const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  existingTasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(existingTasks));
};

export let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

export const searchLocalStorage = (value: string) => {
  if (tasks.length === 0) return;
  tasks = tasks.filter((task: Task) => {
    return task.todo.includes(value);
  });
};

export const filterCategory = (value: string) => {
  if (tasks.length === 0) return;
  tasks = tasks.filter((tasks: Task) => {
    return tasks.category === value;
  });
};

export const filterByCountry = (value: string) => {
  if (tasks.length === 0) return;

  if (value === "all") {
    return tasks;
  }

  if (value === "new") {
    tasks = tasks.filter((task: Task) => {
      return task.completed === false;
    });
  }
  
  if (value === "completed") {
    tasks = tasks.filter((task: Task) => {
      return task.completed === true;
    });
  }
};
