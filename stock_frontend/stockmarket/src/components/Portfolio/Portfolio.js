import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Portfolio.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Fetch portfolio data from backend
  const fetchPortfolio = async () => {
    try {
      const userId = "your-user-id"; // Replace with actual user ID
      const response = await axios.get(`http://localhost:8080/api/portfolio/user/${userId}`);
      setPortfolio(response.data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <button className="buy-stock-btn" onClick={()=>navigate("/buy-stocks")}>Buy Stocks</button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="portfolio-table">
          <thead>
            <tr>
              <th>Stock Symbol</th>
              <th>Quantity</th>
              <th>Purchase Price</th>
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((item) =>
              item.stocks.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.stockSymbol}</td>
                  <td>{stock.quantity}</td>
                  <td>${stock.purchasePrice.toFixed(2)}</td>
                  <td>${stock.totalStockValue.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Portfolio;