import { useState } from "react";
import { searchLocalStorage } from "../localStorage";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    searchLocalStorage(searchValue);
  };
  return (
    <div>
      <input
        type="string"
        name="search"
        value={searchValue}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default Searchbar;
