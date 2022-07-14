import React from "react";
import air_purifier from "./resources/indoor-air-purifying-plants.jpeg";

const Plants = () => {
    return (
        <div className="app-content">
        <h1>Let's Check Out More Plants!</h1>
        <h2>Air Purifiers</h2>
        <img src={air_purifier} alt="variety of air purifying plants"></img>
      </div>
    );
  };

  export default Plants;