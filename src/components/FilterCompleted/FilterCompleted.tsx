import { FC } from 'react';
import styles from './../../sass/category.module.scss'
type Prop = {
  handleCompletedChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const FilterCompleted:FC<Prop> = ({ handleCompletedChange }: Prop) => {

  return (
    <div className={styles["category"]}>
      <select className={styles["category__select"]} id="category" name="category" onChange={handleCompletedChange}>
        <option value="all">All</option>
        <option value="new">New</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterCompleted;
