package com.example.stock_market.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Stock {
    @Id
    private String id;
    private String stockSymbol;
    private int quantity;
    private double purchasePrice;
    private double totalStockValue;

    public Stock() {}

    public Stock(String stockSymbol, int quantity, double purchasePrice) {
        this.id = id;
        this.stockSymbol = stockSymbol;
        this.quantity = Math.max(quantity, 0); 
        this.purchasePrice = Math.max(purchasePrice, 0.0); 
        this.totalStockValue = calculateStockValue();
    }

    public String getId() { return id;}
     public void setId(String id) {this.id=id;}

    public String getStockSymbol() { return stockSymbol; }
    public void setStockSymbol(String stockSymbol) { this.stockSymbol = stockSymbol; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { 
        this.quantity = Math.max(quantity, 0); 
        updateTotalStockValue();
    }

    public double getPurchasePrice() { return purchasePrice; }
    public void setPurchasePrice(double purchasePrice) { 
        this.purchasePrice = Math.max(purchasePrice, 0.0); 
        updateTotalStockValue();
    }

    public double getTotalStockValue() { return totalStockValue; }
    public void setTotalStockValue(double totalStockValue) { this.totalStockValue = totalStockValue; }

    // 🔹 Helper method to calculate stock total value
    private double calculateStockValue() {
        return this.quantity * this.purchasePrice;
    }

    // 🔹 Ensures total value updates when quantity or price changes
    private void updateTotalStockValue() {
        this.totalStockValue=calculateStockValue();
    }

    
}