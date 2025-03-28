import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Stock Market is the Best Way to Invest your Money</h1>
        
      </div>
    </div>
  );
};

export default Home;