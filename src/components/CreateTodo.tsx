import { useState } from "react";

const CreateTodo = () => {
  const [category, setCategory] = useState<string>("");
  const [todo, setTodo] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const completed = false;

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <h1>Create Task</h1>
      <div>
        <label htmlFor="category">Select Category</label>
        <select id="category" name="category" onChange={handleCategory}>
          <option value="chores">Chores</option>
          <option value="work">Work</option>
          <option value="gym">Gym</option>
        </select>
      </div>
      <input
        type="string"
        name="todo"
        value={todo}
        onChange={handleTodo}
        placeholder="What task should be done"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleDescription}
        placeholder="Description (optional) "
      />
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default CreateTodo;
