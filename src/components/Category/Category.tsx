import { FC } from "react";
import styles from "./../../sass/category.module.scss";

type Prop = {
  handleCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Category:FC<Prop> = ({ handleCategoryChange }: Prop) => {
  return (
    <div className={styles["category"]}>
      <select
        className={styles["category__select"]}
        id="category"
        name="category"
        onChange={handleCategoryChange}
      >
        <option value="chores">Chores</option>
        <option value="work">Work</option>
        <option value="gym">Gym</option>
      </select>
    </div>
  );
};

export default Category;
