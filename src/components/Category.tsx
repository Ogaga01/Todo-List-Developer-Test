import { useState } from "react";
import { filterCategory } from "../localStorage";

const Category = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
    filterCategory(filterValue);
  };
  return (
      <div>
        <label  htmlFor="category">
          Select Category
        </label>
        <select
          
          id="category"
          name="category"
          onChange={handleFilter}
        >
          <option  value="chores">
            Chores
          </option>
          <option  value="work">
            Work
          </option>
          <option  value="gym">
            Gym
          </option>
        </select>
      </div>
  );
};

export default Category;
