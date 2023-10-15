const FilterCompleted = () => {
    const [filterValue, setFilterValue] = useState<string>("");

    const handleFilterCompleted = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterValue(e.target.value);
        filterByCompleted(filterValue);
      };
      return (
          <div className={styles["category"]}>
            <select
              className={styles["category__label--value"]}
              id="category"
              name="category"
              onChange={handleFilterCompleted}
            >
              <option className={styles["category__option"]} value="all">
                All
              </option>
              <option className={styles["category__option"]} value="new">
                New
              </option>
              <option className={styles["category__option"]} value="completed">
                Completed
              </option>
            </select>
          </div>
      );
};

export default FilterCompleted;
