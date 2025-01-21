import React, { useState } from "react";

const Test5 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <p>Test 5</p>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      <div className="text">
        {isSubmitted ? <span>{`${name} and ${email}`}</span> : ""}
      </div>
    </div>
  );
};

export default Test5;
