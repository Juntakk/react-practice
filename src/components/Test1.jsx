import React, { useEffect, useState } from "react";

const Test1 = () => {
  let initalCounter = parseInt(localStorage.getItem("counter")) || 0;
  let [counter, setCounter] = useState(initalCounter);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  return (
    <div className="button_container" style={{ marginTop: "2rem" }}>
      <p>Test 1</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <div className="counter">{counter}</div>
    </div>
  );
};

export default Test1;
