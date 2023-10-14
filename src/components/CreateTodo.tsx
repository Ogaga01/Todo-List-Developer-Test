import { useState } from "react";
import { Task } from "../types";
import styles from "../sass/createTodo.module.scss";

const CreateTodo = () => {
  const [category, setCategory] = useState<string>("");
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const completed = false;

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const addTask = () => {
    const task: Task = {
      id: "a",
      todo: description,
      completed,
      category,
    };
    task;
  };

  return (
    <div>
      <h1 className={styles["header"]}>Create Task</h1>
      <div className={styles["category"]}>
        <label className={styles["category__label"]} htmlFor="category">
          Select Category
        </label>
        <select
          className={styles["category__label--value"]}
          id="category"
          name="category"
          onChange={handleCategory}
        >
          <option className={styles["category__option"]} value="chores">
            Chores
          </option>
          <option className={styles["category__option"]} value="work">
            Work
          </option>
          <option className={styles["category__option"]} value="gym">
            Gym
          </option>
        </select>
      </div>
      <input
        className={styles["name"]}
        type="string"
        name="todo"
        value={todo}
        onChange={handleTodo}
        placeholder="What task should be done"
      />
      <input
        className={styles["description"]}
        type="text"
        name="description"
        value={description}
        onChange={handleDescription}
        placeholder="Description (optional) "
      />
      <div>
        <button className={styles["cancel-button"]}>Cancel</button>
        <button className={styles["add-button"]} onClick={addTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
