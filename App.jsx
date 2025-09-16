import React, { useState } from "react";

function App() {
  const [inputText, handleInputText] = useState("");
  const [items, handleItems] = useState([]);
  function writingText(event) {
    const newText = event.target.value;
    handleInputText(newText);
  }
  function handlingClick() {
    handleItems((prevItems) => {
      return [...prevItems, inputText];
    });
    handleInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={writingText} type="text" value={inputText} />
        <button onClick={handlingClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
