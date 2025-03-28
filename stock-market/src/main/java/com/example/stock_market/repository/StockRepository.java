package com.example.stock_market.repository;


import com.example.stock_market.model.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StockRepository extends MongoRepository<Stock, String> {
    // Basic CRUD operations for Stock entity are provided by MongoRepository

    Stock findByStockSymbol(String stockSymbol); 
}