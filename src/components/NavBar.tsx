import AddButton from "./AddButton";
import Category from "./Category";
import FilterCompleted from "./FilterCompleted";
import Searchbar from "./Searchbar";

const NavBar = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <Searchbar />
      <Category />
      <FilterCompleted />
      <AddButton/>
    </div>
  );
};

export default NavBar;
