import React, { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("Red");

  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setcolor(randomColor);
  };
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-column">
        <h1 className="d-flex justify-content-center align-items-center mt-5 ">
          Random Color Generator
        </h1>
        <div
          className=" container-fluid color-conatienr d-flex justify-content-center align-items-center mt-5"
          style={{ backgroundColor: color, width: 200, height: 200 }}
        ></div>

        <div className="mt-5">{color}</div>
        <button className="btn btn-primary mt-5" onClick={changeColor}>
          Click
        </button>
      </div>
    </>
  );
}

export default App;
