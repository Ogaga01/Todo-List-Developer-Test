import { FC, useEffect, useState } from "react";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Task } from "../types";

interface Props {
  props: Task;
}

const TodoItem: FC<Props> = ({ props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const { id, todo, completed } = props;

  useEffect(() => {
    setIsChecked(completed);
  }, [completed]);

  const handleCheckbox = () => {
    let existingTodos: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );

    console.log(id, existingTodos);

    const foundTodo = existingTodos.find((todo) => todo.id === id) as Task;
    console.log(foundTodo);
    existingTodos = existingTodos.filter((todo) => todo.id !== id);

    existingTodos.push({
      ...foundTodo,
      completed: !isChecked,
    });

    localStorage.setItem("tasks", JSON.stringify(existingTodos));
    setIsChecked((prev) => !prev);
    console.log("checked");
  };

  const deleteTodo = () => {
    let existingTodos: Task[] = JSON.parse(
      localStorage.getItem("tasks") || "[]"
    );
    existingTodos = existingTodos.filter((todo) => todo.id !== id);
    localStorage.setItem("tasks", JSON.stringify(existingTodos));
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
      <p>{todo}</p>
      <CopyToClipboard text={todo}>
        <FaRegCopy />
      </CopyToClipboard>
      <FaRegTrashAlt onClick={deleteTodo} />
    </div>
  );
};

export default TodoItem;
