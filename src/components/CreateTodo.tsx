import { FC, useState } from "react";
import { Task } from "../types";
import styles from "../sass/createTodo.module.scss";
import { setLocalStorage } from "../localStorage";

interface Props {
  handleShow: () => void;
  renderTodo: (task: Task[]) => void;
}

const CreateTodo: FC<Props> = ({ handleShow, renderTodo }: Props) => {
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const completed = false;

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const date = Date.now();

  const addTask = () => {
    if (!todo) return;
    const task: Task = {
      id: date.toString(),
      todo: todo,
      description,
      completed,
    };
    setLocalStorage(task);
    handleShow();
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    renderTodo(existingTasks);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles["todo"]}>
        <h1 className={styles["header"]}>Create Task</h1>

        <input
          className={styles["input"]}
          type="string"
          name="todo"
          required
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
          <button className={styles["buttons__cancel"]} onClick={handleShow}>
            Cancel
          </button>
          <button className={styles["buttons__add"]} onClick={addTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
