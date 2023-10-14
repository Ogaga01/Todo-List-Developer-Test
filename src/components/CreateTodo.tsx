import { useState } from "react";
import { Task } from "../types";
import styles from "../sass/createTodo.module.scss";
import { setLocalStorage } from "../localStorage";

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
    (task);
    setLocalStorage()
  };

  return (
    <div className={styles["todo"]}>
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
        className={styles["input"]}
        type="string"
        name="todo"
        value={todo}
        onChange={handleTodo}
        placeholder="What task should be done"
      />
      <input
        className={styles["input"]}
        type="text"
        name="description"
        value={description}
        onChange={handleDescription}
        placeholder="Description (optional) "
      />
      <div className={styles["buttons"]}>
        <button className={styles["buttons__cancel"]}>Cancel</button>
        <button className={styles["buttons__add"]} onClick={addTask}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
