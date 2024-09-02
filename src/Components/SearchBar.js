const SearchBar = () => {
  return (
    <>
      <div className="text-container">
        <div>
          <h1>Implemting Auto Complete Search functionality </h1>
        </div>
        <div>
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Enter the text"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
