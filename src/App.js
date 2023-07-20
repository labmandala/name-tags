import React, { useEffect, useState } from "react";
import NameTag from "./NameTag";
import UserInput from "./UserInput";

const App = () => {
  // The default list of names will only show when there is nothing
  // in the localStorage
  const [names, setNames] = useState(
    JSON.parse(localStorage.getItem("names")) || [
      "Erin",
      "Ann",
      "Nichole",
      "Sharon",
      "Maryn"
    ]
  );

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const removeName = (clickedIndex) => {
    const newNames = names.filter((_, index) => index !== clickedIndex);
    setNames(newNames);
  };

  const addName = (name) => {
    setNames([name, ...names]);
  };

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      {names.map((name, index) => (
        <NameTag
          key={index}
          index={index}
          name={name}
          removeName={removeName}
        />
      ))}
    </div>
  );
};

export default App;
