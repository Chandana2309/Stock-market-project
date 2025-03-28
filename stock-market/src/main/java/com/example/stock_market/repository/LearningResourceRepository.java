package com.example.stock_market.repository;

import com.example.stock_market.model.LearningResource;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LearningResourceRepository extends MongoRepository<LearningResource, String> {
    
}