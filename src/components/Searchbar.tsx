import { useState } from "react";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState<string>('')

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
  }
  return <div>
    <input type="string" name="search" value={searchValue} onChange={handleSearchValue}/>
  </div>;
};

export default Searchbar;
