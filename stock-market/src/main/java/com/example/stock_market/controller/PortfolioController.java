package com.example.stock_market.controller;

import com.example.stock_market.model.Portfolio;
import com.example.stock_market.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/portfolios")
@CrossOrigin(origins = "*") // Allow frontend to access API
public class PortfolioController {
    
    @Autowired
    private PortfolioService portfolioService;

    // Get all portfolios for a specific user
    @GetMapping("/user/{userId}")
    public List<Portfolio> getUserPortfolios(@PathVariable String userId) {
        return portfolioService.getUserPortfolios(userId);
    }

    // Get a specific stock in the portfolio
    @GetMapping("/{id}")
    public Optional<Portfolio> getPortfolioById(@PathVariable String id) {
        return portfolioService.getPortfolioById(id);
    }

    // Add a new stock to the portfolio
    @PostMapping("/add")
    public Portfolio createPortfolio(@RequestBody Portfolio portfolio) {
        return portfolioService.createPortfolio(portfolio);
    }

    // Update an existing stock in the portfolio
    @PutMapping("/update/{id}")
    public Portfolio updatePortfolio(@PathVariable String id, @RequestBody Portfolio portfolio) {
        return portfolioService.updatePortfolio(id, portfolio);
    }

    // Delete a stock from the portfolio
    @DeleteMapping("/delete/{id}")
    public String deletePortfolio(@PathVariable String id) {
        portfolioService.deletePortfolio(id);
        return "Stock removed from portfolio successfully.";
    }
}