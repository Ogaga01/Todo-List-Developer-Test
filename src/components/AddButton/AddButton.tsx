import { FC } from "react";
import styles from "./../../sass/addButton.module.scss";

type Prop = {
  onClick: () => void;
};

const AddButton: FC<Prop> = ({ onClick }: Prop) => {
  return (
    <div className={styles["button"]}>
      <button className={styles["button__add"]} onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default AddButton;
