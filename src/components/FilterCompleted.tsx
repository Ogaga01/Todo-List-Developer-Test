import { useState } from "react";
import { filterByCompleted } from "../localStorage";

const FilterCompleted = () => {
    const [filterValue, setFilterValue] = useState<string>("");

    const handleFilterCompleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value);
        filterByCompleted(filterValue);
      };
      return (
          <div >
            <select
              id="category"
              name="category"
              onChange={handleFilterCompleted}
            >
              <option  value="all">
                All
              </option>
              <option  value="new">
                New
              </option>
              <option  value="completed">
                Completed
              </option>
            </select>
          </div>
      );
};

export default FilterCompleted;
