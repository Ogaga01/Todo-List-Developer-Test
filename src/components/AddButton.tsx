import styles from "./../sass/addButton.module.scss";

type Prop = {
  onClick: () => void;
};

const AddButton = ({onClick}:Prop) => {
  
  return (
    <div className={styles["button"]}>
      <button className={styles["button__add"]} onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default AddButton;
