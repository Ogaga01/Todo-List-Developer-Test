import { useEffect, useState } from "react";
import AddButton from "./AddButton";
import Category from "./Category";
import FilterCompleted from "./FilterCompleted";
import Searchbar from "./Searchbar";
import { Task } from "../types";



const NavBar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>('')
  const [filterValue, setFilterValue] = useState<string>('')
  const [todos, setTodos] = useState<Task[]>([]);
  const [displayedTodos, setDisplayedTodos] = useState<Task[]>(todos);

  console.log(displayedTodos)

  useEffect(() => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    setTodos(existingTasks);
  },[]);

  useEffect(() => {
    const filteredTodos = todos.filter((todo) =>
      todo.todo.toLowerCase().startsWith(searchText.toLowerCase())
    );

    console.log(filteredTodos)
    setDisplayedTodos(filteredTodos);
  }, [todos, searchText]);

  useEffect(() => {
    const filteredTodos = todos.filter((todo) =>
      todo.category.toLowerCase() === categoryValue
    );

    console.log(filteredTodos)
    setDisplayedTodos(filteredTodos);
  }, [todos, categoryValue]);

  useEffect(() => {

    if (filterValue === 'all') {
      const filteredTodos = todos
      setDisplayedTodos(filteredTodos);
      console.log(filteredTodos)
    } else if (filterValue === 'new') {
      const filteredTodos = todos.filter((todo)=> todo.completed === false)
      setDisplayedTodos(filteredTodos);
      console.log(filteredTodos)
    } else if (filterValue === 'completed') {
      const filteredTodos = todos.filter((todo)=> todo.completed === true)
      setDisplayedTodos(filteredTodos);
      console.log(filteredTodos)
   }


    
    
  }, [todos, filterValue]);

  return (
    <div>
      <h1>Todo List</h1>
      <Searchbar handleSearchChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value)
      }}/>
      <Category handleCategoryChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setCategoryValue(e.target.value)
      }}/>
      <FilterCompleted handleCompletedChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setFilterValue(e.target.value)
      }}/>
      <AddButton/>
    </div>
  );
};

export default NavBar;
