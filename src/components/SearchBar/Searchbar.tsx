import styles from "./../../sass/searchBar.module.scss";

type Prop = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ handleSearchChange }: Prop) => {
  return (
    <div className={styles["search"]}>
      <input
        className={styles["search__input"]}
        type="string"
        name="search"
        placeholder="Search todos..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Searchbar;
