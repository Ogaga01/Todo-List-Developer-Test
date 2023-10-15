import { useState } from "react";
import { filterCategory } from "../localStorage";

const Category = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(e.target.value);
    filterCategory(filterValue);
  };
  return (
      <div className={styles["category"]}>
        <label className={styles["category__label"]} htmlFor="category">
          Select Category
        </label>
        <select
          className={styles["category__label--value"]}
          id="category"
          name="category"
          onChange={handleFilter}
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
  );
};

export default Category;
