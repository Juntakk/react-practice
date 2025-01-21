import React, { useState } from "react";

const Test6 = ({ users }) => {
  const [searchValue, setSearchValue] = useState("");

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
        {users
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, key) => (
            <span key={key}>{item.name}</span>
          ))}
      </div>
    </div>
  );
};

export default Test6;
