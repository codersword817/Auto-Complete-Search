import { useEffect, useState } from "react";

let fruitsData = [];
const SearchBar = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const jsonData = await fetch(
      "https://www.fruityvice.com/api/fruit/order/Rosales"
    );
    const data = await jsonData.json();
    setData(data);
    fruitsData = data;
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            onChange={(e) => {
              let value = e.target.value;
              setData(fruitsData.filter((ele) => ele?.name.includes(value)));
            }}
          />
          <div className="search-items">
            {data.map((e, idx) => {
              return (
                <>
                  <div key={idx} className="search-item">
                    {e?.name}
                  </div>
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
