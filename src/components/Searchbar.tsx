
type Prop = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ handleSearchChange }: Prop) => {

  return (
    <div>
      <input
        type="string"
        name="search"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Searchbar;
