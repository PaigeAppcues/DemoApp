import React from "react";
import airpurifier from "./resources/plant.jpeg";

const Plants = () => {
    return (
        <div className="app-content">
        <h1>Let's Check Out More Plants!</h1>
        <h2>Air Purifiers</h2>
        <img src={airpurifier} alt="variety of air purifying plants"></img>
      </div>
    );
  };

  export default Plants;