import React from "react";
import plant from "./resources/plant.jpeg";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Home = () => {
  return (
    <div className="app-content">
      <h1>Welcome to Paige's Test App!</h1>
      <h2>Let's get started!</h2>
      <img src={plant} alt="green leaves overlapping a white frame"></img>
    </div>
  );
};

export default Home;


