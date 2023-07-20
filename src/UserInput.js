import React, { useState } from "react";

const UserInput = ({ addName }) => {
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(nameInput);
    setNameInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new name here..."
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input type="submit" value="Create Name Tag" />
    </form>
  );
};

export default UserInput;
