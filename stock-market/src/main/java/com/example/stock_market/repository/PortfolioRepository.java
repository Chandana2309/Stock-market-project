package com.example.stock_market.repository;

import com.example.stock_market.model.Portfolio;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;

public interface PortfolioRepository extends MongoRepository<Portfolio, String> {
    
    // 🔹 Get all portfolios for a specific user
    List<Portfolio> findByUserId(String userId);

    // 🔹 Find a portfolio by its name (optional)
    Optional<Portfolio> findByUserIdAndPortfolioName(String userId, String portfolioName);

    // 🔹 Delete all portfolios for a user (useful if needed)
   void deleteByuserId(String userId);
}