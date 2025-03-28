package com.example.stock_market.service;

import com.example.stock_market.model.Portfolio;
import com.example.stock_market.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

import javax.management.RuntimeErrorException;

@Service
public class PortfolioService {
    @Autowired
    private PortfolioRepository portfolioRepository;

    // Get portfolios for a specific user
    public List<Portfolio> getUserPortfolios(String userId) {
        return portfolioRepository.findByUserId(userId);
    }

    // ✅ Add missing method to get portfolio by ID
    public Optional<Portfolio> getPortfolioById(String id) {
        return portfolioRepository.findById(id);
    }

    // Create a new portfolio
    public Portfolio createPortfolio(Portfolio portfolio) {
        portfolio.setTotalValue(portfolio.getStocks().stream()
            .mapToDouble(stock -> stock.getQuantity() * stock.getPurchasePrice()).sum());
        return portfolioRepository.save(portfolio);
    }

    // Update an existing portfolio
    public Portfolio updatePortfolio(String id, Portfolio updatedPortfolio) {
        return portfolioRepository.findById(id).map(existingPortfolio -> {
            existingPortfolio.setPortfolioName(updatedPortfolio.getPortfolioName());
            existingPortfolio.setStocks(updatedPortfolio.getStocks());
            existingPortfolio.setTotalValue(updatedPortfolio.getStocks().stream()
                .mapToDouble(stock -> stock.getQuantity() * stock.getPurchasePrice()).sum());
            return portfolioRepository.save(existingPortfolio);
        }).orElseThrow(() -> new RuntimeException("Portfolio not found with id: " + id));
    }

    // Delete a portfolio
    public void deletePortfolio(String id) {
        if (portfolioRepository.existsById(id)) {
            portfolioRepository.deleteById(id);
        } else {
            throw new RuntimeException("Portfolio not found with id: "+id);
        }
    }
}