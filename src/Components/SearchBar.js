import { useState } from "react";

const SearchBar = () => {
  const fruitsData = ["Apple", "Mango", "Banana", "Pineapple"];
  const [data, setData] = useState(fruitsData);
  let id = 0;
  return (
    <>
      <div className="text-container">
        <div>
          <h3>Auto Complete Search </h3>
        </div>
        <div>
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
        </div>
        <div>
          {data.map((e) => {
            return (
              <>
                <div>{e}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
