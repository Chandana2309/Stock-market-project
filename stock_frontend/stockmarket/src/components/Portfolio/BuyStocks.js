import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BuyStocks.css";

const BuyStocks = () => {
  const [hasDemat, setHasDemat] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="buy-stocks-container">
      <h2>Do you have a Demat account?</h2>
      <div className="button-group">
        <button className="yes-btn" onClick={() => setHasDemat(true)}>Yes</button>
        <button className="no-btn" onClick={() => setHasDemat(false)}>No</button>
      </div>

      {hasDemat === true && (
        <button className="buy-btn" onClick={() => navigate("/purchase")}>Buy Stocks</button>
      )}

      {hasDemat === false && (
        <button className="create-btn" onClick={() => navigate("/create-demat")}>Create Demat Account</button>
      )}
    </div>
  );
};

export default BuyStocks;