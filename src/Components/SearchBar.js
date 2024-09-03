import { useState } from "react";

const SearchBar = () => {
  const fruitsData = ["Apple", "Mango", "Banana", "Pineapple", "Orange"];
  const [data, setData] = useState(fruitsData);
  return (
    <>
      <div className="text-container">
        <div>
          <h3>Auto Complete Search </h3>
        </div>
        <div className="search-container">
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Enter the text"
            onKeyDown={(e) => {
              console.log(e.target.value);
              console.log(
                "Filered Data is : ",
                data.filter((e, idx) => e == "Mango")
              );
            }}
          />
          <div className="search-items">
            {data.map((e) => {
              return (
                <>
                  <div>{e}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
