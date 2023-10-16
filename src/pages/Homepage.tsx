import { useEffect, useState } from "react";
import AddButton from "./../components/AddButton/AddButton";
import FilterCompleted from "./../components/FilterCompleted/FilterCompleted";
import Searchbar from "./../components//SearchBar/Searchbar";
import { Task } from "../types";
import TodoItem from "./../components/TodoItem/TodoItem";
import styles from "./../sass/homepage.module.scss";
import CreateTodo from "./../components/CreateTodo/CreateTodo";
import Defaultmessage from "../components/DefaultMessage/Defaultmessage";

const Homepage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [displayedTodos, setDisplayedTodos] = useState<Task[]>(todos);
  const [show, setShow] = useState<boolean>(false);
  const [renderedTodo, setRenderedTodo] = useState<Task[]>([]);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const renderTodo = (task: Task[]) => {
    setRenderedTodo(task);
  };

  useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    setTodos(existingTasks);
    setDisplayedTodos(existingTasks);
    setDisplayedTodos(renderedTodo);
  }, [renderedTodo]);

  useEffect(() => {
    const filteredTodos = todos.filter((todo) =>
      todo.todo.toLowerCase().startsWith(searchText.toLowerCase())
    );

    setDisplayedTodos(filteredTodos);
  }, [todos, searchText]);

  useEffect(() => {
    if (filterValue === "all") {
      const filteredTodos = todos;
      setDisplayedTodos(filteredTodos);
      console.log(11111, filteredTodos);
    } else if (filterValue === "new") {
      const filteredTodos = todos.filter((todo) => todo.completed === false);
      setDisplayedTodos(filteredTodos);
      console.log(22222222, filteredTodos);
    } else if (filterValue === "completed") {
      const filteredTodos = todos.filter((todo) => todo.completed === true);
      setDisplayedTodos(filteredTodos);
      console.log(33333, filteredTodos);
    }
  }, [todos, filterValue]);

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["container__navbar"]}>
          <h1 className={styles["container__navbar--header"]}>Things To Do</h1>

          <div className={styles["category"]}>
            <Searchbar
              handleSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchText(e.target.value);
              }}
            />

            <FilterCompleted
              handleCompletedChange={(
                e: React.ChangeEvent<HTMLSelectElement>
              ) => {
                setFilterValue(e.target.value);
              }}
            />
          </div>
          <AddButton onClick={handleShow} />
        </div>
        <div>
          {displayedTodos.length === 0 ? (
            <Defaultmessage />
          ) : (
            displayedTodos.map((todo) => {
              return (
                <TodoItem renderTodo={renderTodo} key={todo.id} props={todo} />
              );
            })
          )}
        </div>
      </div>
      {show && <CreateTodo handleShow={handleShow} renderTodo={renderTodo} />}
    </div>
  );
};

export default Homepage;
