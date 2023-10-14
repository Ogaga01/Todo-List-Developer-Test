import { useState } from "react";

const CreateTodo = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>Create Task</h1>
      <div className={styles.select}>
        <label htmlFor="continent">Filter by Continents</label>
        <select id="continents" name="continents" onChange={handleCategory}>
          <option value="africa">Chores</option>
          <option value="asia">Work</option>
          <option value="europe">Gym</option>
        </select>
      </div>
    </div>
  );
};

export default CreateTodo;
