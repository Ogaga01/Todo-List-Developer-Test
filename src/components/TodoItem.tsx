import { FC, useEffect, useState } from "react";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Task } from "../types";
import styles from "./../sass/todoitem.module.scss";

interface Props {
  props: Task;
  renderTodo: (task: Task[]) => void;
}

const TodoItem: FC<Props> = ({ props, renderTodo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
  };

  const { id, todo, completed, description } = props;

  useEffect(() => {
    setIsChecked(completed);
  }, [completed]);

  const handleCheckbox = () => {
    let existingTodos: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    const foundTodo = existingTodos.find((todo) => todo.id === id) as Task;
    existingTodos = existingTodos.filter((todo) => todo.id !== id);

    existingTodos.push({
      ...foundTodo,
      completed: !isChecked,
    });

    localStorage.setItem("tasks", JSON.stringify(existingTodos));
    setIsChecked((prev) => !prev);
    const newTodo = JSON.parse(localStorage.getItem("tasks") || "[]");
    renderTodo(newTodo);
  };

  const deleteTodo = () => {
    let existingTodos: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    existingTodos = existingTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("tasks", JSON.stringify(existingTodos));
    const newTodo = JSON.parse(localStorage.getItem("tasks") || "[]");
    renderTodo(newTodo);
  };

  return (
    <div className={styles["item"]}>
      <input
        className={styles["item__check"]}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      {!description ? (
        <p className={styles["item__todos"]}>{todo}</p>
      ) : (
        <div className={styles["item__todo"]}>
          <p className={styles["item__todo--para1"]}>{todo}</p>
          <p className={styles["item__todo--para2"]}>{description}</p>
        </div>
      )}
      <div className={styles["item__icon"]}>
        {copied && <p className={styles["item__icons--a"]}>Copied</p>}
        <CopyToClipboard text={todo}>
          <FaRegCopy
            onClick={handleCopy}
            className={styles["item__icons--a"]}
          />
        </CopyToClipboard>
      </div>
      <FaRegTrashAlt className={styles["item__icons"]} onClick={deleteTodo} />
    </div>
  );
};

export default TodoItem;
