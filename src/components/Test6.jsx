import React, { useState } from "react";

const Test6 = () => {
  const [searchValue, setSearchValue] = useState("");
  const items = [
    "Potato",
    "Watermelon",
    "Papaya",
    "Artichoke",
    "Chicken",
    "Parmesan",
  ];

  return (
    <div>
      {" "}
      <p>Test 6</p>
      <form action="">
        <label htmlFor="">Search</label>
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
      </form>
      <div
        className="items"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {items
          .filter((item) => item.toLowerCase().includes(searchValue))
          .map((item, key) => (
            <span key={key}>{item}</span>
          ))}
      </div>
    </div>
  );
};

export default Test6;
