import { FC } from "react";
import styles from "./../sass/defaultMessage.module.scss";

const Defaultmessage: FC = () => {
  return (
    <div className={styles["message"]}>
      <p className={styles["message__para"]}>
        Click <button className={styles["message__button"]}>+</button> to create
        a Todo
      </p>
    </div>
  );
};

export default Defaultmessage;
