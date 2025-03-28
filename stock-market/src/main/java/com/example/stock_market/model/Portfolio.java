package com.example.stock_market.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "portfolios")
public class Portfolio {
    
    @Id
    private String id;
    private String userId;  
    private String portfolioName;
    private List<Stock> stocks;
    private double totalValue; 

    public Portfolio() {
        this.stocks = new ArrayList<>(); // Ensure stocks list is initialized
    }

    public Portfolio(String userId, String portfolioName, List<Stock> stocks) {
        this.userId = userId;
        this.portfolioName = portfolioName;
        this.stocks = stocks != null ? stocks : new ArrayList<>(); 
        this.totalValue = calculateTotalValue(); 
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    
    public String getPortfolioName() { return portfolioName; }
    public void setPortfolioName(String portfolioName) { this.portfolioName = portfolioName; }

    public List<Stock> getStocks() { return stocks; }
    public void setStocks(List<Stock> stocks) { 
        this.stocks = stocks != null ? stocks : new ArrayList<>(); 
        updateTotalValue(); 
    }

    public double getTotalValue() { return totalValue; }
    public void setTotalValue(double totalValue) { this.totalValue = totalValue; }

    // 🔹 Helper method to calculate portfolio total value
    private double calculateTotalValue() {
        return stocks.stream()
                .mapToDouble(stock -> stock.getQuantity() * stock.getPurchasePrice())
                .sum();
    }

    // 🔹 Update totalValue dynamically when stocks change
    public void updateTotalValue() {
        this.totalValue = calculateTotalValue();
    }

    // 🔹 Add stock to portfolio
    public void addStock(Stock stock) {
        this.stocks.add(stock);
        updateTotalValue(); 
    }

    // 🔹 Remove stock from portfolio
    public void removeStock(String stockId) {
        this.stocks.removeIf(stock -> stock.getId().equals(stockId));
        updateTotalValue();
    }
}