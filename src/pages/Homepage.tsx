import { useEffect, useState } from "react";
import AddButton from "./../components/AddButton";
import Category from "./../components/Category";
import FilterCompleted from "./../components/FilterCompleted";
import Searchbar from "./../components/Searchbar";
import { Task } from "../types";
import TodoItem from "./../components/TodoItem";
import styles from "./../sass/homepage.module.scss";
import CreateTodo from "./../components/CreateTodo";

const Homepage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [filterValue, setFilterValue] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [displayedTodos, setDisplayedTodos] = useState<Task[]>(todos);
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(true);
  };

  // const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  // useEffect(() => {
  //   const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  //   setDisplayedTodos(tasks);
  // }, []);

  useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    setTodos(existingTasks);
    setDisplayedTodos(existingTasks);
  }, []);

  useEffect(() => {
    const filteredTodos = todos.filter((todo) =>
      todo.todo.toLowerCase().startsWith(searchText.toLowerCase())
    );

    setDisplayedTodos(filteredTodos);
  }, [todos, searchText]);

  useEffect(() => {
    const filteredTodos = todos.filter(
      (todo) => todo.category.toLowerCase() === categoryValue
    );

    console.log(5555555, filteredTodos);
    setDisplayedTodos(filteredTodos);
  }, [todos, categoryValue]);

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
        <h1 className={styles["container__navbar--header"]}>Todo List</h1>
        <Searchbar
          handleSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchText(e.target.value);
          }}
        />
        <Category
          handleCategoryChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategoryValue(e.target.value);
          }}
        />
        <FilterCompleted
          handleCompletedChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setFilterValue(e.target.value);
          }}
        />
        <AddButton onClick={handleShow} />
      </div>
      <ul>
        {displayedTodos.map((todo: Task) => {
          return <TodoItem props={todo} key={todo.id} />;
        })}
      </ul>
    </div>
    {show && <CreateTodo/>}
    </div>
  );
};

export default Homepage;
