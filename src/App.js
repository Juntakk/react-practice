import { useState } from "react";
import "./App.css";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import Test4 from "./components/Test4";
import Test5 from "./components/Test5";
import Test6 from "./components/Test6";

function App() {
  //Test3
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );

  //Test4
  const [color, setColor] = useState("blue");
  const functionToPass = () => {
    setColor(color === "blue" ? "pink" : "blue");
  };

  //Test6
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  console.log(localStorage.getItem("users"));
  console.log(JSON.parse(localStorage.getItem("users")));

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Test1 />
      <Test2 setUsers={setUsers} />
      <Test3 setDarkMode={setDarkMode} darkMode={darkMode} />
      <Test4 bloobli={functionToPass} />
      <div
        style={{
          height: "2rem",
          width: "100vw",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <Test5 />
      <Test6 users={users} />
    </div>
  );
}

export default App;
