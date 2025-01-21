import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Test2 = ({ setUsers }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const [isLoading, setIsLoading] = useState(false);

  async function fetchUser() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();

      setUser(json[0].name);
      setUsers(JSON.stringify);
      localStorage.setItem("user", json[0].name);
      localStorage.setItem("users", JSON.stringify(json));
    } catch (error) {
      console.error("Failed to fetch user:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <p>Test 2</p>

      <button onClick={fetchUser}>
        {isLoading ? "Loading..." : "Load profile"}
      </button>
      <div>
        {isLoading ? (
          <p>
            <AiOutlineLoading3Quarters size={24} className="loading-icon" />
          </p>
        ) : user ? (
          <span>{user}</span>
        ) : (
          <span>No user found</span>
        )}
      </div>
    </div>
  );
};

export default Test2;
