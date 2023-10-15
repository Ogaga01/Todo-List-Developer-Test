
type Prop = {
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Category = ({ handleCategoryChange }: Prop) => {

  return (
    <div>
      <label htmlFor="category">Select Category</label>
      <select id="category" name="category" onChange={handleCategoryChange}>
        <option value="chores">Chores</option>
        <option value="work">Work</option>
        <option value="gym">Gym</option>
      </select>
    </div>
  );
};

export default Category;
